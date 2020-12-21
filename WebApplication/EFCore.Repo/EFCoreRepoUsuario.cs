using System.Collections.Generic;
using System.Linq;
using EFCore.Dominio;

namespace EFCore.Repo
{
    public class EFCoreRepoUsuario : IEFCoreRepo
    {
        private 
            UsuarioContext _context;
        public EFCoreRepoUsuario(UsuarioContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public Usuario FindById(int Id)
        {
            return _context.Usuarios.Find(Id);
        }
        public List<Usuario> GetAll()
        {
            return _context.Usuarios.ToList();
        }

        public bool SaveChange()
        {
            return (_context.SaveChanges() > 0);
        }
    }
}
