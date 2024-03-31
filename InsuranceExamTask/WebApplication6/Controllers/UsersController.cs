using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InsuranceExamTask.IRepositories;
using InsuranceExamTask.Models;
using System.Text.Json;

namespace InsuranceExamTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // Implement CRUD methods

        [HttpGet("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {            
            var users = await _userRepository.GetAllUsers();
             return Ok(users);
        }

        [HttpGet("GetUserByID")]
        public async Task<IActionResult> GetUserByID(int id)
        {
            var user= await _userRepository.GetUserByID(id);
            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return NotFound("User is not found");
            }
        }

        [HttpGet("GetPoliciesByUserId")]
        public async Task<IActionResult> GetPoliciesByUserId([FromQuery]int userId)
        {
            var policies = await _userRepository.GetPoliciesByUserId(userId);
            if (policies != null)
            {
                return Ok(policies);
            }
            else
            {
                return NotFound("policies not found for this user");
            }
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            await _userRepository.CreateUser(user);
            return Ok();
        }

        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _userRepository.DeleteUser(id);
            return Ok();
        }

        [HttpPut("UpdateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] User user)
        {
            await _userRepository.UpdateUser(user);
            return Ok();
        }
    }
}
