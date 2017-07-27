using CedroRestaurante.DAL;
using CedroRestaurante.DTO;
using CedroRestaurante.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace CedroRestaurante.Repository
{
    public class PratoRepository : BaseRepository
    {
        private CedroContext dba = new CedroContext();

        private static readonly Expression<Func<Prato, PratoDTO>> AsPratoDTO =
            x => new PratoDTO
            {
                id_pratos = x.id_pratos,
                nome_prato = x.nome_prato,
                preco_prato = x.preco_prato,
                id_restaurante = x.id_restaurante,
                nome_restaurante = x.Restaurante.nome_restaurante
            };
        public PratoDTO GetOne(int id)
        {
            PratoDTO prato = dba.Pratos.Include(p => p.Restaurante)
                    .Where(p => p.id_pratos == id)
                    .Select(AsPratoDTO)
                    .FirstOrDefault();
            return prato;
        }

        public List<Prato> GetByIdRestaurante(int id)
        {
            return dba.Pratos.Where(x => x.id_restaurante == id).ToList();
        }
        public Prato GetOneByID(int id)
        {
            return dba.Pratos.FirstOrDefault(p => p.id_pratos == id);
        }

        public IQueryable<PratoDTO> Get()
        {
            return dba.Pratos.Include(r => r.Restaurante).Select(AsPratoDTO);
        }
        public List<Prato> GetAll()
        {
            return dba.Pratos.ToList();
        }

        public void Delete(Prato entity)
        {
            dba.Pratos.Remove(entity);
            dba.SaveChanges();
        }

        public void Save(Prato entity)
        {
            dba.Entry(entity).State = entity.id_pratos == 0 ?
            EntityState.Added : EntityState.Modified;
            dba.SaveChanges();
        }

        public List<Prato> GetByName(string nome)
        {
            return dba.Pratos.Where(x => x.nome_prato.Contains(nome)).OrderBy(x => x.nome_prato).ToList();
        }
    }
}