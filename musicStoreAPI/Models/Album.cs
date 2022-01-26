using System.ComponentModel.DataAnnotations;

namespace musicStoreAPI.Models
{
    public class Album
    {
        public int Id { get; set; }
        [Required]
        [StringLength(20)]
        public string AlbumName { get; set; }=String.Empty;

        [StringLength(500)]
        public string AlbumDescription { get; set; } = String.Empty;
        [Required]
        public int PerformerId { get; set; }
        public Performer? Performer { get; set; }

        
    }
}
