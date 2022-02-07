package co.unicauca.domain.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import co.unicauca.access.dao.IReportDAO;
import co.unicauca.domain.model.Report;
import co.unicauca.utilities.MHelpers;

@Component
public class ReportService implements IReportService{

	@Autowired
	private IReportDAO reportDAO;

	@Override
	public void saveReport(Object report) {

		reportDAO.save(MHelpers.modelMapper().map(report, Report.class));
	}

	@Override
	public ArrayList<Report> returnReports() {
		
		return (ArrayList<Report>) reportDAO.findAll();
	}

	@Override
	public Report prioritizeReports() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateStatus(int id, String status) {

		Optional<Report> reportOP= reportDAO.findById(id);
		
		Report report=reportOP.get();
		report.setStatus(status);
		reportDAO.save(report);
		
	}

	@Override
	public List<Report> groupReports(String address) {
		
		return reportDAO.findByAddress(address);
	}
}
