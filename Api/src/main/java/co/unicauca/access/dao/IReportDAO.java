package co.unicauca.access.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.domain.model.Report;

@Repository
public interface IReportDAO extends CrudRepository<Report, Integer> {

	@Transactional(readOnly=true)
	public List<Report> findByAddress(String address);
}
