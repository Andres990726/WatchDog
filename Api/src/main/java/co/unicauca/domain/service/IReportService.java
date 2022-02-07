package co.unicauca.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import co.unicauca.domain.model.Report;

@Service
public interface IReportService {

	public void saveReport(Object report);
	public ArrayList<Report> returnReports();
	
	public Report prioritizeReports();
	
	public void updateStatus(int id, String status);
	public List<Report> groupReports(String address);
}
