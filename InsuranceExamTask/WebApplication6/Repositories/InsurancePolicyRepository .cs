using InsuranceExamTask.Data;
using InsuranceExamTask.IRepositories;
using InsuranceExamTask.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace InsuranceExamTask.Repositories
{
    public class InsurancePolicyRepository : IInsurancePolicyRepository
    {
        private readonly DataContext _context;

        public InsurancePolicyRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<InsurancePolicy>> GetAllInsurancePolicies()
        {
            return await _context.InsurancePolicies.ToListAsync();
        }

        public async Task<InsurancePolicy> GetInsurancePolicyByID(int id)
        {
            return await _context.InsurancePolicies.FindAsync(id); ;  
        }
        public async Task CreateInsurancePolicy(InsurancePolicy policy)
        {
            _context.InsurancePolicies.Add(policy);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateInsurancePolicy(InsurancePolicy policy)
        {
            var oldPolicy = _context.InsurancePolicies.Find(policy.ID);
            if (oldPolicy != null)
            {
                oldPolicy.PolicyNumber = policy.PolicyNumber;
                oldPolicy.StartDate = policy.StartDate;
                oldPolicy.EndDate = policy.EndDate;
                oldPolicy.InsuranceAmount = policy.InsuranceAmount;
                _context.InsurancePolicies.Update(oldPolicy);
                await _context.SaveChangesAsync();
            }
        }
        public async Task DeleteInsurancePolicy(int id)
        {
            var policy = _context.InsurancePolicies.Find(id);
            if (policy != null)
            {
                _context.InsurancePolicies.Remove(policy);
                await _context.SaveChangesAsync();
            }
        }

    }
}
