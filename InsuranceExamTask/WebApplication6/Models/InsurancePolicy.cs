using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace InsuranceExamTask.Models
{
    public class InsurancePolicy
    {
        [Key]
        [JsonPropertyName("ID")]
        public int ID { get; set; }

        [JsonPropertyName("PolicyNumber")]
        public string PolicyNumber { get; set; }

        [JsonPropertyName("InsuranceAmount")]
        public double InsuranceAmount { get; set; }
       
        [JsonPropertyName("StartDate")]
        public DateTime StartDate { get; set; }
        
        [JsonPropertyName("EndDate")]
        public DateTime EndDate { get; set; }
        
        [Required]
        [RegularExpression(@"^\d{8,9}$", ErrorMessage = "User ID must be an integer with 8 to 9 digits")]
        [JsonPropertyName("UserID")]
        public int UserID { get; set; }
    }
}
