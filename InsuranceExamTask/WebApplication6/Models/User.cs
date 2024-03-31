using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace InsuranceExamTask.Models
{
    public class User
    {
        [Required]
        [RegularExpression(@"^\d{8,9}$", ErrorMessage = "User ID must be an integer with 8 to 9 digits")]
        [JsonPropertyName("ID")]
        public int ID { get; set; }

        [JsonPropertyName("Name")]
        public string Name { get; set; }

        [EmailAddress]
        [JsonPropertyName("Email")]
        public string Email { get; set; }
    }
}
