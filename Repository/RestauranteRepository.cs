using CedroRestaurante.DAL;
using CedroRestaurante.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CedroRestaurante.Repository
{
    public class RestauranteRepository : BaseRepository
    {
        private PratoRepository _PratoRepository;

        public PratoRepository PratoRepository
        {
            get
            {
                if (_PratoRepository == null)
                    _PratoRepository = new PratoRepository();
                return _PratoRepository;
            }
            set { _PratoRepository = value; }
        }
        private CedroContext dba = new CedroContext();

        public Restaurante GetOne(int id)
        {
            return dba.Restaurantes.FirstOrDefault(e => e.id_restaurante == id);
        }

        public List<Restaurante> GetAll()
        {
            return dba.Restaurantes.ToList();
        }

        public void Delete(Restaurante entity)
        {
            List<Prato> pratos = PratoRepository.GetByIdRestaurante(entity.id_restaurante);

            foreach (Prato p in pratos)
            {
                PratoRepository.Delete(p);
            }

            dba.Restaurantes.Remove(entity);
            dba.SaveChanges();
        }

        public void Save(Restaurante entity)
        {
            dba.Entry(entity).State = entity.id_restaurante == 0 ?
            EntityState.Added : EntityState.Modified;
            dba.SaveChanges();
        }

        public List<Restaurante> GetByName(string nome)
        {
            return dba.Restaurantes.Where(x => x.nome_restaurante.Contains(nome)).OrderBy(x => x.nome_restaurante).ToList();
        }
    }
}