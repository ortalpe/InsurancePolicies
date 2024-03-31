using Microsoft.EntityFrameworkCore;
using InsuranceExamTask.Models;


namespace InsuranceExamTask.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<InsurancePolicy> InsurancePolicies { get; set; }
    }
}
