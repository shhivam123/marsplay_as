const fetch = require("node-fetch");
const format = require('pg-format');
const pg = require('pg');
var constants = require("./constant");

const connectionString = 'postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc'
 
async function run(query1) {
    let client;
    try {
      client = new pg.Client({
        connectionString: connectionString
      });
      await client.connect();
      let {rows} = await client.query(query1);
      console.log(rows);
    } catch (e) {
      console.error(e);
    } finally {
      client.end();
    }
  }

class controller
{
     
    getAllUser()
    { 
        fetch(constants.USER)
        .then(response => response.json())
        .then(json =>  
          {
            const aa= JSON.parse(JSON.stringify(json));
            var output=""
            for(var i=0;i<aa.length;i++)
            { 
              
         var ans=   "("+aa[i].id+",'"+aa[i].name+"','"+aa[i].username+"','"+aa[i].email+"','"+aa[i].phone+"','"+aa[i].website+"','"+
         JSON.stringify(aa[i].address)+"','"+JSON.stringify(aa[i].company)+"')"
              if(i<aa.length-1)
              output=output+ans+","
              else
              output=output+ans;
            }
             let query1 = 'INSERT INTO shivam_users(id, name, username, email, phone,website,address,company) VALUES'+output;
              run(query1)
 
        }
          )
    }
    getAllPost()
    {
        fetch(constants.POST)
        .then(response => response.json())
        .then(json =>  
          {
            const aa= JSON.parse(JSON.stringify(json));
            var output=""
            for(var i=0;i<aa.length;i++)
            {  var ans=   "("+aa[i].id+","+aa[i].userId+",'"+aa[i].title+"','"+aa[i].body+"')"
              if(i<aa.length-1)
              output=output+ans+","
              else
              output=output+ans;
            }
             let query1 = 'INSERT INTO shivam_posts(id, userid, title, body) VALUES'+output;
             run(query1)
        })
    }
    getAllCommnet()
    {
        fetch(constants.COMMENT)
        .then(response => response.json())
        .then(json =>  
          {
            const aa= JSON.parse(JSON.stringify(json));
            var output=""
            for(var i=0;i<aa.length;i++)
            {  var ans=   "("+aa[i].id+","+aa[i].postId+",'"+aa[i].name+"','"+aa[i].email+"','"+aa[i].body+"')"
              if(i<aa.length-1)
              output=output+ans+","
              else
              output=output+ans;
            }
             let query1 = 'INSERT INTO shivam_comments(id, postid, name, email,body) VALUES'+output;
             run(query1)
        })
    }
    getAllAlbums()
    {

        fetch(constants.ALBUMS)
        .then(response => response.json())
        .then(json =>  
          {
            const aa= JSON.parse(JSON.stringify(json));
            var output=""
            for(var i=0;i<aa.length;i++)
            {  var ans=   "("+aa[i].id+","+aa[i].userId+",'"+aa[i].title+"')"
              if(i<aa.length-1)
              output=output+ans+","
              else
              output=output+ans;
            }
             let query1 = 'INSERT INTO shivam_albums(id, userid, title) VALUES'+output;
             run(query1)
        })   
    }
    getAllPhotos()
    {

        fetch(constants.PHOTOS)
        .then(response => response.json())
        .then(json =>  
          {
            const aa= JSON.parse(JSON.stringify(json));
            var output=""
            for(var i=0;i<aa.length;i++)
            {  var ans=   "("+aa[i].id+","+aa[i].albumId+",'"+aa[i].title+"','"+aa[i].url+"','"+aa[i].thumbnailUrl+"')"
              if(i<aa.length-1)
              output=output+ans+","
              else
              output=output+ans;
            }
             let query1 = 'INSERT INTO shivam_photos(id, albumid, title, url,thumbnailurl) VALUES'+output;
             run(query1)
        })    
    }
    getAllTodos()
    {

        fetch(constants.TODOS)
        .then(response => response.json())
        .then(json =>  
          {
            const aa= JSON.parse(JSON.stringify(json));
            var output=""
            for(var i=0;i<aa.length;i++)
            {  var ans=   "("+aa[i].id+","+aa[i].userId+",'"+aa[i].title+"','"+aa[i].completed+"')"
              if(i<aa.length-1)
              output=output+ans+","
              else
              output=output+ans;
            }
             let query1 = 'INSERT INTO shivam_todos(id, userid, title, completed) VALUES'+output;
             run(query1)
        })
    }
}

const cont= new controller();
cont.getAllUser();
cont.getAllPost();
cont.getAllCommnet();
cont.getAllAlbums();
cont.getAllPhotos();
cont.getAllTodos();

