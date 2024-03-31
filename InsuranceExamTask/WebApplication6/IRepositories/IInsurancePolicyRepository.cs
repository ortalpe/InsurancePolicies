using InsuranceExamTask.Models;

namespace InsuranceExamTask.IRepositories
{
    public interface IInsurancePolicyRepository
    {
        Task<List<InsurancePolicy>> GetAllInsurancePolicies();
        Task<InsurancePolicy> GetInsurancePolicyByID(int id);
        Task CreateInsurancePolicy(InsurancePolicy policy);
        Task UpdateInsurancePolicy(InsurancePolicy policy);
        Task DeleteInsurancePolicy(int id);
    }
}
