using EFCore.Dominio;
using System.Collections.Generic;

namespace EFCore.Repo
{
    public interface IEFCoreRepo
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Usuario FindById(int Id);
        bool SaveChange();
        List<Usuario> GetAll();

        
    }
}
