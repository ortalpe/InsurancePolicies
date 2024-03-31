using InsuranceExamTask.Data;
using InsuranceExamTask.IRepositories;
using InsuranceExamTask.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace InsuranceExamTask.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }
       
        public async Task<List<User>> GetAllUsers()
        {
             return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUserByID(int id)
        {
            return await _context.Users.FindAsync(id);
        }
         
        public async Task<List<InsurancePolicy>> GetPoliciesByUserId(int userId)
        {
            var policies = await _context.InsurancePolicies
            .Where(policy => policy.UserID == userId)
            .ToListAsync();

            if (policies != null)
            {
                return policies;
            }
            else
            {
                return null; // Policy not found
            }
        }
        public async Task CreateUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateUser(User user)
        {
            var oldUser = _context.Users.Find(user.ID);
            if (oldUser != null)
            {
                oldUser.Name = user.Name;
                oldUser.Email = user.Email;
                _context.Users.Update(oldUser);
                await _context.SaveChangesAsync();
            }
        }
        public async Task DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }
 
    }
}
