using Microsoft.EntityFrameworkCore;
using musicStoreAPI.Models;

namespace musicStoreAPI.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { 
        
        }

        public DbSet<Album> Albums { get; set; }

        public DbSet<Performer> Performers { get; set; }
    }
}
