using System.ComponentModel.DataAnnotations;

namespace musicStoreAPI.Models
{
    public class Performer
    {
        
        public int Id { get; set; }

        [Required]
        [StringLength(20)]
        public string PerformerName { get; set; }
    }
}
