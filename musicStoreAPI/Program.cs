using Microsoft.EntityFrameworkCore;
using musicStoreAPI.Data;

var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
//Enable CORS
builder.Services.AddCors(options=>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod().AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    
}

// Enable middleware to serve generated Swagger as a JSON endpoint.  
app.UseSwagger();

// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),  
// specifying the Swagger JSON endpoint.  
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "MusicStoreApi V1");
    c.RoutePrefix = string.Empty;
});
app.UseAuthorization();

app.UseCors(myAllowSpecificOrigins);
app.UseHttpsRedirection();



app.MapControllers();

app.Run();
