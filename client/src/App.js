import React, { useState } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';



function App() {

  const columns = [
    {
      name: "Sno",
      selector: row => row.sno,
      sortable: true
    },
    {
      name: "Customer Name",
      selector: row => row.customer_name,
      sortable: true
    },
    {
      name: "Age",
      selector: row => row.age
    },
    {
      name: "Phone",
      selector: row => row.phone
    },
    {
      name: "Location",
      selector: row => row.location
    },
    {
      name: "Date",
      selector: row => row.date
    },
    {
      name: "Time",
      selector: row => row.time
    }
  ];

  // data

  const data = [
    {
      sno: 1,
      customer_name: "Amit Sharma",
      age: 28,
      phone: 9876543210,
      location: "Delhi",
      date: "02-01-2024",
      time: "10:30:00"
    },
    {
      sno: 2,
      customer_name: "Priya Patel",
      age: 28,
      phone: 8765432109,
      location: "Mumbai",
      date: "03-01-2024",
      time: "09:15:00"
    }
    ,
    {
      sno: 3,
      customer_name: "Rahul Singh",
      age: 35,
      phone: 7654321098,
      location: "Bangalore",
      date: "04-01-2024",
      time: "13:00:00"
    },
    {
      sno: 4,
      customer_name: "Neha Gupta",
      age: 30,
      phone: 6543210987,
      location: "Kolkata",
      date: "05-01-2024",
      time: "08:45:00"
    },
    {
      sno: 5,
      customer_name: "Rajesh Kumar",
      age: 40,
      phone: 5432109876,
      location: "Chennai",
      date: "07-01-2024",
      time: "09:00:00"
    },
    {
      sno: 6,
      customer_name: "Pooja Sharma",
      age: 26,
      phone: 4321098765,
      location: "Hyderabad",
      date: "08-01-2024",
      time: "09:15:00"
    },
    {
      sno: 7,
      customer_name: "Manish Patel",
      age: 33,
      phone: 3210987654,
      location: "Pune",
      date: "09-01-2024",
      time: "09:30:00"
    },
    {
      sno: 8,
      customer_name: "Anjali Singh",
      age: 29,
      phone: 2109876543,
      location: "Ahmedabad",
      date: "10-01-2024",
      time: "09:45:00"
    },
    {
      sno: 9,
      customer_name: "Suresh Gupta",
      age: 38,
      phone: 1098765432,
      location: "Jaipur",
      date: "11-01-2024",
      time: "10:00:00"
    },
    {
      sno: 10,
      customer_name: "Kavita Verma",
      age: 31,
      phone: 987654321,
      location: "Lucknow",
      date: "12-01-2024",
      time: "17:30:00"
    },
    {
      sno: 11,
      customer_name: "Arjun Singh",
      age: 27,
      phone: 9876543210,
      location: "Chandigarh",
      date: "13-01-2024",
      time: "10:30:00"
    },
    {
      sno: 12,
      customer_name: "Deepika Patel",
      age: 34,
      phone: 8765432109,
      location: "Indore",
      date: "14-01-2024",
      time: "10:45:00"
    },
    {
      sno: 13,
      customer_name: "Rakesh Kumar",
      age: 39,
      phone: 7654321098,
      location: "Surat",
      date: "15-01-2024",
      time: "11:00:00"
    },
    {
      sno: 14,
      customer_name: "Nisha Gupta",
      age: 25,
      phone: 6543210987,
      location: "Bhopal",
      date: "16-01-2024",
      time: "12:15:00"
    },
    {
      sno: 15,
      customer_name: "Rohit Sharma",
      age: 36,
      phone: 5432109876,
      location: "Nagpur",
      date: "17-01-2024",
      time: "11:30:00"
    },
    {
      sno: 16,
      customer_name: "Ananya Patel",
      age: 32,
      phone: 4321098765,
      location: "Kanpur",
      date: "18-01-2024",
      time: "08:15:00"
    },
    {
      sno: 17,
      customer_name: "Vikas Singh",
      age: 28,
      phone: 3210987654,
      location: "Patna",
      date: "19-01-2024",
      time: "12:00:00"
    },
    {
      sno: 18,
      customer_name: "Meera Gupta",
      age: 37,
      phone: 2109876543,
      location: "Varanasi",
      date: "20-01-2024",
      time: "12:15:00"
    },
    {
      sno: 19,
      customer_name: "Akash Verma",
      age: 30,
      phone: 1098765432,
      location: "Allahabad",
      date: "21-01-2024",
      time: "12:30:00"
    },
    {
      sno: 20,
      customer_name: "Preeti Sharma",
      age: 29,
      phone: 987654321,
      location: "Ranchi",
      date: "22-01-2024",
      time: "12:45:00"
    },
    {
      sno: 21,
      customer_name: "Sanjay Patel",
      age: 35,
      phone: 9876543210,
      location: "Ludhiana",
      date: "23-01-2024",
      time: "13:00:00"
    },
    {
      sno: 22,
      customer_name: "Kritika Singh",
      age: 26,
      phone: 8765432109,
      location: "Agra",
      date: "24-01-2024",
      time: "13:15:00"
    },
    {
      sno: 23,
      customer_name: "Mohan Gupta",
      age: 33,
      phone: 7654321098,
      location: "Guwahati",
      date: "25-01-2024",
      time: "13:30:00"
    },
    {
      sno: 24,
      customer_name: "Jyoti Sharma",
      age: 31,
      phone: 6543210987,
      location: "Amritsar",
      date: "26-01-2024",
      time: "13:45:00"
    },
    {
      sno: 25,
      customer_name: "Sameer Patel",
      age: 40,
      phone: 5432109876,
      location: "Jodhpur",
      date: "27-01-2024",
      time: "14:00:00"
    },
    {
      sno: 26,
      customer_name: "Sunita Verma",
      age: 27,
      phone: 4321098765,
      location: "Coimbatore",
      date: "28-01-2024",
      time: "14:15:00"
    },
    {
      sno: 27,
      customer_name: "Vineet Singh",
      age: 34,
      phone: 3210987654,
      location: "Kochi",
      date: "29-01-2024",
      time: "10:00:00"
    },
    {
      sno: 28,
      customer_name: "Ritu Gupta",
      age: 39,
      phone: 2109876543,
      location: "Visakhapatnam",
      date: "30-01-2024",
      time: "14:45:00"
    },
    {
      sno: 29,
      customer_name: "Ajay Sharma",
      age: 25,
      phone: 1098765432,
      location: "Shimla",
      date: "31-01-2024",
      time: "15:00:00"
    },
    {
      sno: 30,
      customer_name: "Shruti Patel",
      age: 36,
      phone: 987654321,
      location: "Bhubaneswar",
      date: "01-02-2024",
      time: "15:15:00"
    },
    {
      sno: 31,
      customer_name: "Vikram Singh",
      age: 32,
      phone: 9876543210,
      location: "Dehradun",
      date: "02-02-2024",
      time: "19:45:00"
    },
    {
      sno: 32,
      customer_name: "Anu Gupta",
      age: 28,
      phone: 8765432109,
      location: "Raipur",
      date: "03-02-2024",
      time: "15:45:00"
    },
    {
      sno: 33,
      customer_name: "Prakash Verma",
      age: 37,
      phone: 7654321098,
      location: "Vadodara",
      date: "04-02-2024",
      time: "16:00:00"
    },
    {
      sno: 34,
      customer_name: "Divya Sharma",
      age: 30,
      phone: 6543210987,
      location: "Noida",
      date: "05-02-2024",
      time: "16:15:00"
    },
    {
      sno: 35,
      customer_name: "Ganesh Patel",
      age: 29,
      phone: 5432109876,
      location: "Gurgaon",
      date: "06-02-2024",
      time: "16:30:00"
    },
    {
      sno: 36,
      customer_name: "Neha Singh",
      age: 35,
      phone: 4321098765,
      location: "Faridabad",
      date: "07-02-2024",
      time: "16:45:00"
    },
    {
      sno: 37,
      customer_name: "Rohan Gupta",
      age: 26,
      phone: 3210987654,
      location: "Ghaziabad",
      date: "08-02-2024",
      time: "17:00:00"
    },
    {
      sno: 38,
      customer_name: "Tanvi Verma",
      age: 33,
      phone: 2109876543,
      location: "Jalandhar",
      date: "09-02-2024",
      time: "16:15:00"
    },
    {
      sno: 39,
      customer_name: "Aman Sharma",
      age: 31,
      phone: 1098765432,
      location: "Meerut",
      date: "10-02-2024",
      time: "17:30:00"
    },    
    {
      sno: 40,
      customer_name: "Komal Patel",
      age: 27,
      phone: 987654321,
      location: "Patiala",
      date: "11-02-2024",
      time: "08:45:00"
    },
    {
      sno: 41,
      customer_name: "Vijay Singh",
      age: 34,
      phone: 9876543210,
      location: "Udaipur",
      date: "12-02-2024",
      time: "18:00:00"
    },
    {
      sno: 42,
      customer_name: "Sanya Gupta",
      age: 25,
      phone: 8765432109,
      location: "Ajmer",
      date: "13-02-2024",
      time: "18:15:00"
    },
    {
      sno: 43,
      customer_name: "Ravi Sharma",
      age: 40,
      phone: 7654321098,
      location: "Jabalpur",
      date: "14-02-2024",
      time: "18:30:00"
    },
    {
      sno: 44,
      customer_name: "Maya Patel",
      age: 27,
      phone: 6543210987,
      location: "Kota",
      date: "15-02-2024",
      time: "18:45:00"
    },
    {
      sno: 45,
      customer_name: "Arvind Singh",
      age: 36,
      phone: 5432109876,
      location: "Kanpur",
      date: "16-02-2024",
      time: "19:00:00"
    },
    {
      sno: 46,
      customer_name: "Juhi Gupta",
      age: 32,
      phone: 4321098765,
      location: "Varanasi",
      date: "17-02-2024",
      time: "19:15:00"
    },
    {
      sno: 47,
      customer_name: "Nikhil Verma",
      age: 29,
      phone: 3210987654,
      location: "Lucknow",
      date: "18-02-2024",
      time: "19:30:00"
    },
    {
      sno: 48,
      customer_name: "Ananya Sharma",
      age: 35,
      phone: 2109876543,
      location: "Jaipur",
      date: "19-02-2024",
      time: "19:45:00"
    },
    {
      sno: 49,
      customer_name: "Rahul Patel",
      age: 26,
      phone: 1098765432,
      location: "Agra",
      date: "20-02-2024",
      time: "17:30:00"
    },
    {
      sno: 50,
      customer_name: "Kavita Singh",
      age: 33,
      phone: 987654321,
      location: "Delhi",
      date: "21-02-2024",
      time: "16:45:00"
    }    
  

    // - DATA END
   
  ]




  const [records, setRecords] = useState(data);

  

function handleFilter(event) {
  const newData = data.filter(row => {
    // Check if row.name is a string before calling toLowerCase()
    return typeof row.location === 'string' && row.location.toLowerCase().includes(event.target.value.toLowerCase());
  });
  setRecords(newData);
}

 
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const trecords = records.slice(firstIndex, lastIndex);
  const npage = Math.ceil(records.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)


  return (
    
    <div className="App">
      {/* Header */}
      <div className="panel">
        <div className="panel-all">
          <i className="fa-solid fa-bars"></i>
          Home
        </div>
        <div className="panel-ops">  
          <p>Admin</p>
          <p>Account</p>
          <p>Customers</p>
          <p>Customer Rules</p>
          <p>Customer Satisfaction Surrvey</p>
          <p>Feedback from Customers</p>
          
        </div>
        

        <div className="panel-deals">
          Log Out
        </div>
      </div>

      <header>
      <div className="navbar">
      <div className="Cust">
        <p>Customer Data</p>
      </div>
        <div className="nav-address">
          <div className="add-icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="add-second">India</p>
          </div>
        </div>
        <div className="nav-search">
          <select className="search-select">
            <option>In</option>
            <option>En</option>
            <option>Us</option>
            <option>Ge</option>
          </select>
          <input placeholder="Search Customer By Location" className="search-input" onChange={handleFilter}/>
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        
        <div className="nav-return">
          <button type="button">Sort</button>
        </div>
        
      </div>
      
    </header>
    
      
      <DataTable
          columns={columns}
          data={trecords}
          fixedHeader
          pagination
          selectableRows

      ></DataTable>
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, i) => (
              <li className = {`page-item ${currentPage === n ? 'active' : '' }`} key={i}>
                <a href='#' className='page-link' onClick={ () => chageCPage(n)} >{n}</a>
              </li>
            ))
          }
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>Next</a>
          </li>

        </ul>
      </nav>
    
    </div>
   
  );



  function prePage() {
    if(currentPage !== 1){
      setCurrentPage(currentPage-1)
    }

  }

  function chageCPage(sno) {
    setCurrentPage(sno)

  }

  function nextPage() {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }

  }
}

export default App;
