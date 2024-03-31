using InsuranceExamTask.Models;

namespace InsuranceExamTask.IRepositories
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUsers();
        Task<User> GetUserByID(int id);
        Task<List<InsurancePolicy>> GetPoliciesByUserId(int userId);
        Task CreateUser(User user);
        Task UpdateUser(User user);
        Task DeleteUser(int id);
    }
}
