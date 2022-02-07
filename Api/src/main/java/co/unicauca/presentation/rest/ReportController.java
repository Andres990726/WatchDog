package co.unicauca.presentation.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.domain.service.IReportService;

@CrossOrigin("*")
@RestController
@RequestMapping("report")
public class ReportController {

	@Autowired
	private IReportService reportService;
	@PostMapping("/add")
	public void addReports(@RequestBody Object report) {
		reportService.saveReport(report);
	}
	@PostMapping("/updateStatus/{id}/{status}")
	public void updateStatus(@PathVariable ("id") int id, @PathVariable("status") String status) {
		reportService.updateStatus(id, status);
	}
	@GetMapping(value="/group/{address}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> groupAddress(@PathVariable("address") String address){
		return ResponseEntity.ok(reportService.groupReports(address));
	}
	@GetMapping(value="/returnAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> returnReports(){
		
		return ResponseEntity.ok(reportService.returnReports());
	}
}
