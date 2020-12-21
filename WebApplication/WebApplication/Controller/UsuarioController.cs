using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Dominio;
using EFCore.Repo;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controller
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IEFCoreRepo _repoUsuario;

        public UsuarioController(IEFCoreRepo repoUsuario)
        {
            _repoUsuario = repoUsuario;
        }

        [Route("")]
        [HttpGet]
        public IActionResult GetAllUsuarios()
        {
            try
            {
                List<Usuario> usuarios = _repoUsuario.GetAll();
                return Ok(usuarios);
                
            }

            catch (Exception e)
            {
                return BadRequest("Erro ao pegar os dados"+ e.Message);
            }
        }

        [HttpPost]
        public IActionResult InsertUsuarios(Usuario usuario)
        {
            try
            {
                _repoUsuario.Add(usuario);
                if (_repoUsuario.SaveChange() == true)
                {
                    return Ok("Usuario inserido com Sucesso!");

                }
                return BadRequest("Erro ao inserir ao banco");
            }

            catch (Exception e)
            {
                return BadRequest("Erro ao inserir ao banco" + e.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateUsuarios(Usuario usuario)
        {
            try
            {
                _repoUsuario.Update(usuario);
                if (_repoUsuario.SaveChange() == true)
                {
                    return Ok("Atualizado com sucesso!");
                }
                return BadRequest("Não foi atualizado com sucesso!");
            }
            catch (Exception e)
            {
                return BadRequest("Não foi atualizado com sucesso!");
            }
        }
        

        [HttpDelete]
        public IActionResult DeleteUsuarios(int id)
        {
            try
            {
                Usuario usuario = _repoUsuario.FindById(id);
                _repoUsuario.Delete(usuario);
                if (_repoUsuario.SaveChange() == true)
                {
                    return Ok("Usuario foi deletado com suceso!");
                }
                return BadRequest("Usuario não foi deletado");
            }
            catch (Exception e)
            {
                return BadRequest("Usuario não foi deletado");
            }
        }
    }
}
    