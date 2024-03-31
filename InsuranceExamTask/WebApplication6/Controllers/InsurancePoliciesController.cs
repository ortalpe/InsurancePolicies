using Microsoft.AspNetCore.Mvc;
using InsuranceExamTask.IRepositories;
using InsuranceExamTask.Models;

namespace InsuranceExamTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsurancePoliciesController : ControllerBase
    {
        private readonly IInsurancePolicyRepository _policyRepository;
        private readonly IUserRepository _userRepository;

        public InsurancePoliciesController(IInsurancePolicyRepository policyRepository, IUserRepository userRepository)
        {
            _policyRepository = policyRepository;
            _userRepository = userRepository;
        }

        // Implement CRUD methods

        [HttpGet("GetAllInsurancePolicies")]
        public async Task<IActionResult> GetAllInsurancePolicies()
        {
            var policies = await _policyRepository.GetAllInsurancePolicies();
            return Ok(policies);
        }

        [HttpGet("GetInsurancePolicyByID")]
        public async Task<IActionResult> GetInsurancePolicyByID(int id)
        {
            var policy = await _policyRepository.GetInsurancePolicyByID(id);
            if (policy != null)
            {
                return Ok(policy);
            }
            else
            {
                return NotFound("Policy is not found");
            }
        }

        [HttpPost("CreateInsurancePolicy")]
        public async Task<IActionResult> CreateInsurancePolicy([FromBody] InsurancePolicy policy)
        {
            //Check if user exist for creating a policy
            var user = await _userRepository.GetUserByID(policy.UserID);
            if (user != null)
            {
                await _policyRepository.CreateInsurancePolicy(policy);
                return Ok();
            }
            else
            {
                return NotFound("User is not exist");

            }
        }

        [HttpDelete("DeleteInsurancePolicy")]
        public async Task<IActionResult> DeleteInsurancePolicy(int policyId)
        {
            await _policyRepository.DeleteInsurancePolicy(policyId);
            return Ok();
        }

        [HttpPut("UpdatePolicy")]
        public async Task<IActionResult> UpdatePolicy([FromBody] InsurancePolicy policy)
        {
            await _policyRepository.UpdateInsurancePolicy(policy);
            return Ok();
        }
    }
}
