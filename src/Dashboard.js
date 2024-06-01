import React from 'react';
import { Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Summary from './components/Summary';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const data = [
    {
        "timestamp": "2019-01-02T03:50:09.097718",
        "flow_id": 52373568,
        "in_iface": "eth0",
        "event_type": "alert",
        "src_ip": "8.42.77.171",
        "src_port": 65036,
        "dest_ip": "138.68.3.71",
        "dest_port": 3306,
        "proto": "TCP",
        "alert": {
          "action": "allowed",
          "gid": 1,
          "signature_id": 2010937,
          "rev": 3,
          "signature": "ET SCAN Suspicious inbound to mySQL port 3306",
          "category": "Potentially Bad Traffic",
          "severity": 2
        }
      },
  
      {"timestamp":"2019-01-02T03:50:10.386108","flow_id":52491840,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65386,"dest_ip":"138.68.3.71","dest_port":5915,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2002911,"rev":5,"signature":"ET SCAN Potential VNC Scan 5900-5920","category":"Attempted Information Leak","severity":2}},
    {"timestamp":"2019-01-02T03:50:10.421359","flow_id":52507296,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65438,"dest_ip":"138.68.3.71","dest_port":5432,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010939,"rev":3,"signature":"ET SCAN Suspicious inbound to PostgreSQL port 5432","category":"Potentially Bad Traffic","severity":2}},
    {"timestamp":"2019-01-02T03:50:10.576769","flow_id":52568784,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49238,"dest_ip":"138.68.3.71","dest_port":1433,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010935,"rev":3,"signature":"ET SCAN Suspicious inbound to MSSQL port 1433","category":"Potentially Bad Traffic","severity":2}},
    {"timestamp":"2019-01-02T03:50:10.585758","flow_id":52576512,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49269,"dest_ip":"138.68.3.71","dest_port":1521,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010936,"rev":3,"signature":"ET SCAN Suspicious inbound to Oracle SQL port 1521","category":"Potentially Bad Traffic","severity":2}},
    
    
    {"timestamp":"2019-01-02T03:52:20.364261","flow_id":52973328,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":50485,"dest_ip":"138.68.3.71","dest_port":1521,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010936,"rev":3,"signature":"ET SCAN Suspicious inbound to Oracle SQL port 1521","category":"Potentially Bad Traffic","severity":2}},
    {"timestamp":"2019-01-02T03:52:20.848052","flow_id":53051952,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":50719,"dest_ip":"138.68.3.71","dest_port":22,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2001219,"rev":19,"signature":"ET SCAN Potential SSH Scan","category":"Attempted Information Leak","severity":2}},
    
    
    {"timestamp":"2019-01-02T03:55:33.315220","flow_id":53259600,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":51777,"dest_ip":"138.68.3.71","dest_port":5811,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2002910,"rev":5,"signature":"ET SCAN Potential VNC Scan 5800-5820","category":"Attempted Information Leak","severity":2}},
    {"timestamp":"2019-01-02T04:31:20.213004","flow_id":53773680,"in_iface":"eth0","event_type":"alert","src_ip":"185.176.27.102","src_port":54629,"dest_ip":"138.68.3.71","dest_port":63917,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2402000,"rev":5047,"signature":"ET DROP Dshield Block Listed Source group 1","category":"Misc Attack","severity":2}},
    {"timestamp":"2019-01-02T04:31:42.200840","flow_id":53774016,"in_iface":"eth0","event_type":"alert","src_ip":"5.188.206.22","src_port":43968,"dest_ip":"138.68.3.71","dest_port":16000,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2402000,"rev":5047,"signature":"ET DROP Dshield Block Listed Source group 1","category":"Misc Attack","severity":2}},
    {"timestamp":"2019-01-02T04:31:42.200840","flow_id":53774016,"in_iface":"eth0","event_type":"alert","src_ip":"5.188.206.22","src_port":43968,"dest_ip":"138.68.3.71","dest_port":16000,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2402000,"rev":5047,"signature":"ET DROP Dshield Block Listed Source group 1","category":"Misc Attack","severity":2}},
    {"timestamp":"2019-01-02T04:31:42.200840","flow_id":53774016,"in_iface":"eth0","event_type":"alert","src_ip":"5.188.206.22","src_port":43968,"dest_ip":"138.68.3.71","dest_port":16000,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2402000,"rev":5047,"signature":"ET DROP Dshield Block Listed Source group 1","category":"Misc Attack","severity":2}},
    
    {"timestamp":"2019-01-02T05:02:23.048484","flow_id":54479616,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":58055,"dest_ip":"138.68.3.71","dest_port":22,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2001219,"rev":19,"signature":"ET SCAN Potential SSH Scan","category":"Attempted Information Leak","severity":2}},
    {"timestamp":"2019-01-02T05:11:06.691637","flow_id":54489024,"in_iface":"eth0","event_type":"alert","src_ip":"89.248.168.51","src_port":45025,"dest_ip":"138.68.3.71","dest_port":80,"proto":"UDP","alert":{"action":"allowed","gid":1,"signature_id":2403477,"rev":46061,"signature":"ET CINS Active Threat Intelligence Poor Reputation IP UDP group 89","category":"Misc Attack","severity":2}},
    {"timestamp":"2019-01-02T05:12:54.889194","flow_id":54491712,"in_iface":"eth0","event_type":"alert","src_ip":"88.214.26.54","src_port":45049,"dest_ip":"138.68.3.71","dest_port":36012,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2403472,"rev":46061,"signature":"ET CINS Active Threat Intelligence Poor Reputation IP TCP group 87","category":"Misc Attack","severity":2}},
    
    
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2e2e2e',
          color: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        },
      },
    },
  },
});

const Dashboard = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Container style={{ marginTop: '20px' }}>
        <Summary data={data} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <LineChart data={data} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart data={data} />
          </Grid>
          <Grid item xs={12}>
            <PieChart data={data} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
