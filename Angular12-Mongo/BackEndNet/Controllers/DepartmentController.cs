using BackEndNet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Data;

namespace BackEndNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DepartmentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("DB_Conn"));

            var dbList = dbClient.GetDatabase("angularMongo").GetCollection<Department>("Department").AsQueryable();

            return new JsonResult(dbList);
        }

        [HttpPost]
        public JsonResult Post(Department dep)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("DB_Conn"));

            int LastDepartmentId = dbClient.GetDatabase("angularMongo").GetCollection<Department>("Department").AsQueryable().Count();
            dep.DepartmentId = LastDepartmentId + 1;

            dbClient.GetDatabase("angularMongo").GetCollection<Department>("Department").InsertOne(dep);

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Department dep)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("DB_Conn"));

            var filter = Builders<Department>.Filter.Eq("DepartmentId", dep.DepartmentId);

            var update = Builders<Department>.Update.Set("DepartmentName", dep.DepartmentName);



            dbClient.GetDatabase("angularMongo").GetCollection<Department>("Department").UpdateOne(filter, update);

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("DB_Conn"));

            var filter = Builders<Department>.Filter.Eq("DepartmentId", id);


            dbClient.GetDatabase("angularMongo").GetCollection<Department>("Department").DeleteOne(filter);

            return new JsonResult("Deleted Successfully");
        }
    }
}
