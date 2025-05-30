import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  FaUsers,
  FaUserGraduate,
  FaUserCheck,
  FaUserTimes,
  FaGraduationCap,
  FaHome,
  FaBook,
  FaClipboardList,
  FaList,
  FaStar,
  FaComment,
  FaUser,
  FaVideo,
  FaUpload,
  FaBriefcaseMedical,
  FaCar,
  FaQuestionCircle,
  FaCompass,
  FaComments,
  FaBell,
  FaBars,
  FaEye,
  FaArrowRight,
  FaTimes,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTimelinePopup, setShowTimelinePopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDocumentPopup, setShowDocumentPopup] = useState(false);

  const chartData = [
    { name: 'Sidang Komisi 1', value: 25 },
    { name: 'Kolokium', value: 30 },
    { name: 'Proposal', value: 20 },
    { name: 'Evaluasi dan Monitoring', value: 28 },
    { name: 'Sidang Komisi 2', value: 15 },
    { name: 'Seminar', value: 18 },
    { name: 'Publikasi', value: 12 },
    { name: 'Uji Tesis', value: 8 },
  ];

  const timelineData = [
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    },
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    },
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    },
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    },
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    },
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    },
    {
      timestamp: '16/05/2025 16:44:02',
      namaTahap: 'Sidang Komisi 1',
      sebelumDiubah: '30 Mei 2025',
      setelahDiubah: '27 Juni 2025'
    }
  ];

  return (
    <div className="App" style={styles.app}>
      {/* Top Header */}
      <div style={styles.topRectangle}>
        <div style={styles.topBarContent}>
          <FaBars style={styles.menuBars} />
          <div style={styles.rightContent}>
            <div style={styles.topIconBar}>
              <FaCompass style={styles.topIcon} />
              <FaComments style={styles.topIcon} />
              <FaBell style={styles.topIcon} />
            </div>
            <div style={styles.userProfile}>
              <img
                src="https://cdn.ipb.ac.id/photo/G61_2022_G6401221083_FADHIL MUMTAZ_35b2d35b78154b819057438730a43ab1.jpg"
                alt="User"
                style={styles.profilePic}
              />
              <div style={styles.userInfo}>
                <div style={styles.userName}>FADHIL MUMTAZ</div>
                <div style={styles.userId}>G6401221083</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Detail */}
      {showPopup && (
        <div style={styles.popupContainer}>
          <div style={styles.popupContent}>
            <h3 style={styles.popupTitle}>Detail Kegiatan</h3>
            <button 
              onClick={() => setShowPopup(false)}
              style={styles.closeButton}
            >
              <FaTimes />
            </button>
            
            <div style={styles.popupImageContainer}>
              <div style={styles.popupImagePlaceholder}>
                {/* Placeholder untuk gambar */}
              </div>
            </div>
            
            <div style={styles.popupFieldsContainer}>
              <div style={styles.popupField}>
                <span style={styles.popupFieldLabel}>Jenis Kegiatan</span>
                <span style={styles.popupFieldColon}>:</span>
              </div>
              <div style={styles.popupField}>
                <span style={styles.popupFieldLabel}>Nama Kegiatan</span>
                <span style={styles.popupFieldColon}>:</span>
              </div>
              <div style={styles.popupField}>
                <span style={styles.popupFieldLabel}>Waktu Kegiatan</span>
                <span style={styles.popupFieldColon}>:</span>
              </div>
              <div style={styles.popupField}>
                <span style={styles.popupFieldLabel}>Durasi Kegiatan</span>
                <span style={styles.popupFieldColon}>:</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Konfirmasi */}
      {showConfirmation && (
        <div style={styles.confirmationContainer}>
          <div style={styles.confirmationContent}>
            <h3 style={styles.confirmationTitle}>Konfirmasi Persetujuan</h3>
            <p style={styles.confirmationText}>Apakah Anda yakin ingin menyetujui kegiatan ini?</p>
            
            <div style={styles.confirmationButtons}>
              <button 
                style={{...styles.confirmButton, ...styles.approveButton}}
                onClick={() => setShowConfirmation(false)}
              >
                Setujui
              </button>
              <button 
                style={{...styles.confirmButton, ...styles.cancelButton}}
                onClick={() => setShowConfirmation(false)}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Timeline */}
      {showTimelinePopup && (
        <div style={styles.timelinePopupContainer}>
          <div style={styles.timelinePopupContent}>
            <h3 style={styles.timelinePopupTitle}>Log Perubahan Timeline</h3>
            <button 
              onClick={() => setShowTimelinePopup(false)}
              style={styles.closeButton}
            >
              <FaTimes />
            </button>
            
            <div style={styles.timelineTableContainer}>
              <table style={styles.timelineTable}>
                <thead>
                  <tr style={styles.timelineTableHeader}>
                    <th style={{...styles.timelineTableCell, ...styles.timelineTableHeaderCell}}>Timestamp</th>
                    <th style={{...styles.timelineTableCell, ...styles.timelineTableHeaderCell}}>Nama Tahap</th>
                    <th style={{...styles.timelineTableCell, ...styles.timelineTableHeaderCell}}>Sebelum Diubah</th>
                    <th style={{...styles.timelineTableCell, ...styles.timelineTableHeaderCell}}>Setelah Diubah</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, index) => (
                    <tr key={index} style={{
                      ...styles.timelineTableRow,
                      backgroundColor: index % 2 === 0 ? '#F2F2F2' : '#FFFFFF'
                    }}>
                      <td style={styles.timelineTableCell}>{item.timestamp}</td>
                      <td style={styles.timelineTableCell}>{item.namaTahap}</td>
                      <td style={styles.timelineTableCell}>{item.sebelumDiubah}</td>
                      <td style={styles.timelineTableCell}>{item.setelahDiubah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div style={styles.timelineFooter}>
              <button 
                style={styles.timelineCloseButton}
                onClick={() => setShowTimelinePopup(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Left Sidebar */}
      <div style={styles.leftRectangle}>
        <div style={styles.sidebarIcons}>
          <FaHome style={styles.sidebarIcon} />
          
          <div style={styles.iconGroup}>
            <FaBook style={styles.sidebarIcon} />
            <FaClipboardList style={styles.sidebarIcon} />
          </div>
          
          <FaStar style={styles.sidebarIcon} />
          <FaComment style={styles.sidebarIcon} />
          <FaUser style={styles.sidebarIcon} />
          <FaVideo style={styles.sidebarIcon} />
          <FaGraduationCap style={{...styles.sidebarIcon, ...styles.activeIcon}} />
          <FaUpload style={styles.sidebarIcon} />
          <FaBriefcaseMedical style={styles.sidebarIcon} />
          <FaCar style={styles.sidebarIcon} />
          <FaQuestionCircle style={styles.sidebarIcon} />
        </div>
      </div>

      {/* Scrollable Content */}
      <div style={styles.contentWrapper}>
        <div style={styles.headerContainer}>
          <h1 style={styles.judul}>
            Monitoring Tugas Akhir
          </h1>
        </div>

        <div style={styles.boxRow}>
          <div style={{...styles.colorBox, ...styles.blueBox}}>
            <div style={styles.boxIcon}><FaUsers /></div>
            <div style={styles.boxContent}>
              <div style={styles.boxNumber}>147</div>
              <div style={styles.boxLabel}>Mahasiswa Aktif</div>
            </div>
          </div>
          <div style={{...styles.colorBox, ...styles.greenBox}}>
            <div style={styles.boxIcon}><FaUserGraduate /></div>
            <div style={styles.boxContent}>
              <div style={styles.boxNumber}>60</div>
              <div style={styles.boxLabel}>Mahasiswa</div>
            </div>
          </div>
          <div style={{...styles.colorBox, ...styles.yellowBox}}>
            <div style={{...styles.boxIcon, color: 'rgba(0,0,0,0.7)'}}><FaUserCheck /></div>
            <div style={styles.boxContent}>
              <div style={styles.boxNumber}>38</div>
              <div style={styles.boxLabel}>Mahasiswa</div>
            </div>
          </div>
          <div style={{...styles.colorBox, ...styles.redBox}}>
            <div style={styles.boxIcon}><FaUserTimes /></div>
            <div style={styles.boxContent}>
              <div style={styles.boxNumber}>39</div>
              <div style={styles.boxLabel}>Mahasiswa</div>
            </div>
          </div>
        </div>

        <div style={styles.middleBox}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Sebaran Mahasiswa</h3>
            <div style={styles.filterContainer}>
              <span style={styles.filterText}>Pilih berdasarkan</span>
              <div style={styles.filterOptions}>
                <label style={styles.filterOption}>
                  <input type="radio" name="filter" value="semua" defaultChecked />
                  <span>Tampilkan Semua</span>
                </label>
                <label style={styles.filterOption}>
                  <input type="radio" name="filter" value="2025" />
                  <span>2025</span>
                </label>
                <label style={styles.filterOption}>
                  <input type="radio" name="filter" value="2024" />
                  <span>2024</span>
                </label>
                <label style={styles.filterOption}>
                  <input type="radio" name="filter" value="2023" />
                  <span>2023</span>
                </label>
                <label style={styles.filterOption}>
                  <input type="radio" name="filter" value="2022" />
                  <span>2022</span>
                </label>
              </div>
            </div>
          </div>
          <div style={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#666' }}
                  height={40}
                  interval={0}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div style={styles.tooltipContainer}>
                          <div style={styles.tooltipHeader}>{label}</div>
                          <div style={styles.tooltipContent}>
                            <span style={styles.tooltipLabel}>Mahasiswa : </span>
                            <span style={styles.tooltipValue}>{payload[0].value} orang</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#4A90E2"
                  radius={[4, 4, 0, 0]}
                  cursor="pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={styles.tabelContainer}>
          <table style={styles.tabelMahasiswa}>
            <thead>
              <tr style={{ ...styles.tableHeader, backgroundColor: '#FFFFFF' }}>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell, width: '50px'}}>No</th>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell, width: '120px'}}>Tahun Semester</th>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell, width: '150px'}}>Nama Mahasiswa</th>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell, width: '100px'}}>NIM</th>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell}}>Topik Tugas Akhir</th>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell, width: '180px'}}>Status Progress</th>
                <th style={{...styles.tableCell, ...styles.tableHeaderCell, width: '150px'}}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ ...styles.tableRow, backgroundColor: '#F2F2F2' }}>
                <td style={styles.tableCell}>1</td>
                <td style={styles.tableCell}>2024/2025<br />Semester Genap</td>
                <td style={styles.tableCell}>Muhammad Agal Lulanika</td>
                <td style={styles.tableCell}>G650XXXXXX</td>
                <td style={styles.tableCell}>Analisis Sentimen pada Ulasan Produk E-Commerce</td>
                <td style={styles.tableCell}>
                  <span style={{...styles.status, ...styles.greenStatus}}>
                    <FaCheck style={styles.statusIcon} /> Sidang Komisi 1
                  </span>
                </td>
                <td style={{ ...styles.tableCell, ...styles.aksi }}>
                  <div style={styles.actionButtonsContainer}>
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.blueBtn,
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                      }}
                      aria-label="View"
                      onClick={() => setShowPopup(true)}
                      type="button"
                    >
                      <FaEye />
                    </button>

                    {/* Button Cyan (Tengah) */}
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.cyanBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Document"
                      type="button"
                      onClick={() => setShowTimelinePopup(true)}
                    >
                      <FaList />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.greenBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Next"
                      type="button"
                      onClick={() => setShowConfirmation(true)}
                    >
                      <FaArrowRight />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.redBtn,
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                      }}
                      aria-label="Reject"
                      type="button"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ ...styles.tableRow, backgroundColor: '#FFFFFF' }}>
                <td style={styles.tableCell}>2</td>
                <td style={styles.tableCell}>2024/2025<br />Semester Genap</td>
                <td style={styles.tableCell}>Shafaya Sasikirana</td>
                <td style={styles.tableCell}>G650XXXXXX</td>
                <td style={styles.tableCell}>Sistem Pakar Diagnosa Penyakit Menggunakan Fuzzy</td>
                <td style={styles.tableCell}>
                  <span style={{...styles.status, ...styles.yellowStatus}}>
                    <FaExclamationTriangle style={styles.statusIcon} /> Evaluasi dan Monitoring
                  </span>
                </td>
                <td style={{ ...styles.tableCell, ...styles.aksi }}>
                  <div style={styles.actionButtonsContainer}>
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.blueBtn,
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                      }}
                      aria-label="View"
                      onClick={() => setShowPopup(true)}
                      type="button"
                    >
                      <FaEye />
                    </button>

                    {/* Button Cyan (Tengah) */}
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.cyanBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Document"
                      type="button"
                      onClick={() => setShowTimelinePopup(true)}
                    >
                      <FaList />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.greenBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Next"
                      type="button"
                      onClick={() => setShowConfirmation(true)}
                    >
                      <FaArrowRight />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.redBtn,
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                      }}
                      aria-label="Reject"
                      type="button"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ ...styles.tableRow, backgroundColor: '#F2F2F2' }}>
                <td style={styles.tableCell}>3</td>
                <td style={styles.tableCell}>2024/2025<br />Semester Genap</td>
                <td style={styles.tableCell}>Rio Alvein Hasana</td>
                <td style={styles.tableCell}>G650XXXXXX</td>
                <td style={styles.tableCell}>Aplikasi Peminjaman Buku Digital Berbasis Web</td>
                <td style={styles.tableCell}>
                  <span style={{...styles.status, ...styles.greenStatus}}>
                    <FaCheck style={styles.statusIcon} /> Sidang Komisi 2
                  </span>
                </td>
                <td style={{ ...styles.tableCell, ...styles.aksi }}>
                  <div style={styles.actionButtonsContainer}>
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.blueBtn,
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                      }}
                      aria-label="View"
                      onClick={() => setShowPopup(true)}
                      type="button"
                    >
                      <FaEye />
                    </button>

                    {/* Button Cyan (Tengah) */}
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.cyanBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Document"
                      type="button"
                      onClick={() => setShowTimelinePopup(true)}
                    >
                      <FaList />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.greenBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Next"
                      type="button"
                      onClick={() => setShowConfirmation(true)}
                    >
                      <FaArrowRight />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.redBtn,
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                      }}
                      aria-label="Reject"
                      type="button"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ ...styles.tableRow, backgroundColor: '#FFFFFF' }}>
                <td style={styles.tableCell}>4</td>
                <td style={styles.tableCell}>2024/2025<br />Semester Genap</td>
                <td style={styles.tableCell}>Fadhil Mumtaz</td>
                <td style={styles.tableCell}>G650XXXXXX</td>
                <td style={styles.tableCell}>Analisis Data Penjualan Menggunakan Power BI</td>
                <td style={styles.tableCell}>
                  <span style={{...styles.status, ...styles.redStatus}}>
                    <FaTimes style={styles.statusIcon} /> Seminar
                  </span>
                </td>
                <td style={{ ...styles.tableCell, ...styles.aksi }}>
                  <div style={styles.actionButtonsContainer}>
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.blueBtn,
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                      }}
                      aria-label="View"
                      onClick={() => setShowPopup(true)}
                      type="button"
                    >
                      <FaEye />
                    </button>

                    {/* Button Cyan (Tengah) */}
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.cyanBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Document"
                      type="button"
                      onClick={() => setShowTimelinePopup(true)}
                    >
                      <FaList />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.greenBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Next"
                      type="button"
                      onClick={() => setShowConfirmation(true)}
                    >
                      <FaArrowRight />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.redBtn,
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                      }}
                      aria-label="Reject"
                      type="button"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ ...styles.tableRow, backgroundColor: '#F2F2F2' }}>
                <td style={styles.tableCell}>5</td>
                <td style={styles.tableCell}>2024/2025<br />Semester Genap</td>
                <td style={styles.tableCell}>T. Mochamad Rafly</td>
                <td style={styles.tableCell}>G650XXXXXX</td>
                <td style={styles.tableCell}>Penerapan Machine Learning dalam Prediksi Cuaca</td>
                <td style={styles.tableCell}>
                  <span style={{...styles.status, ...styles.yellowStatus}}>
                    <FaExclamationTriangle style={styles.statusIcon} /> Proposal
                  </span>
                </td>
                <td style={{ ...styles.tableCell, ...styles.aksi }}>
                  <div style={styles.actionButtonsContainer}>
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.blueBtn,
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                      }}
                      aria-label="View"
                      onClick={() => setShowPopup(true)}
                      type="button"
                    >
                      <FaEye />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.cyanBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Document"
                      type="button"
                      onClick={() => setShowTimelinePopup(true)}
                    >
                      <FaList />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.greenBtn,
                        borderRadius: 0,
                      }}
                      aria-label="Next"
                      type="button"
                      onClick={() => setShowConfirmation(true)}
                    >
                      <FaArrowRight />
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.redBtn,
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                      }}
                      aria-label="Reject"
                      type="button"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#F3F4FF',
    position: 'relative',
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
  },
  topRectangle: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '53px',
    backgroundColor: 'white',
    zIndex: 1100,
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
  },
  topBarContent: {
    height: '100%',
    marginLeft: '92.7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  menuBars: {
    marginRight: 'auto',
    fontSize: '20px',
    color: '#7F7F7F',
    cursor: 'pointer',
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  topIconBar: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  topIcon: {
    fontSize: '23px',
    color: '#7F7F7F',
    cursor: 'pointer',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  profilePic: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  userName: {
    fontWeight: 'bold',
    color: '#7F7F7F',
    fontSize: '16px',
  },
  userId: {
    fontWeight: 'lighter',
    color: '#7F7F7F',
    fontSize: '14px',
  },
  leftRectangle: {
    position: 'fixed',
    top: '53px',
    left: 0,
    width: '74.5px',
    height: 'calc(100vh - 53px)',
    backgroundColor: 'white',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px 0',
    zIndex: 1000,
  },
  sidebarIcons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    minWidth: '3rem',
    padding: '4px 0',
  },
  sidebarIcon: {
    fontSize: '16px',
    color: '#333',
    cursor: 'pointer',
    width: '24px',
    height: '34px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    margin: '1px 0',
  },
  activeIcon: {
    background: 'linear-gradient(to right, #3a00ff, #3183ff)',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    color: 'white',
    width: '24px',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    marginTop: '8px',
  },
  contentWrapper: {
    marginLeft: '92.7px',
    padding: '92.7px 20px 20px 20px',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingLeft: '0px',
  },
  judul: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#343A40',
    margin: 0,
  },
  boxRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  colorBox: {
    flex: 1,
    height: '80px',
    borderRadius: '12px',
    padding: '15px 20px',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  blueBox: {
    backgroundColor: '#263C92',
  },
  greenBox: {
    backgroundColor: '#28A745',
  },
  yellowBox: {
    backgroundColor: '#FFC107',
    color: 'black',
  },
  redBox: {
    backgroundColor: '#DC3545',
  },
  boxIcon: {
    fontSize: '35px',
    marginRight: '12px',
    color: 'rgba(255,255,255,0.8)',
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  boxNumber: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  boxLabel: {
    fontSize: '14px',
    fontWeight: 'normal',
    marginTop: '5px',
    opacity: 0.9,
  },
  middleBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '20px',
    minHeight: '400px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: '20px',
  },
  chartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
  },
  filterText: {
    fontSize: '12px',
    color: '#666',
    fontWeight: '500',
  },
  filterOptions: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  filterOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    color: '#666',
    cursor: 'pointer',
  },
  chartContainer: {
    width: '100%',
    height: '300px',
  },
  tooltipContainer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  tooltipHeader: {
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  tooltipContent: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltipLabel: {
    marginRight: '4px',
  },
  tooltipValue: {
    fontWeight: 'bold',
  },
  tabelContainer: {
    marginTop: '30px',
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    overflowX: 'auto',
  },
  tabelMahasiswa: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    color: '#333',
    tableLayout: 'fixed',
  },
  tableHeader: {
    backgroundColor: '#f3f4ff',
  },
  tableHeaderCell: {
    padding: '12px',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px',
    verticalAlign: 'middle',
    border: 'none',
  },
  status: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    borderRadius: '20px',
    fontWeight: 'bold',
    minHeight: '20px',
    boxSizing: 'border-box',
  },
  statusIcon: {
    fontSize: '14px',
  },
  greenStatus: {
    backgroundColor: '#28a745',
    color: 'white',
  },
  yellowStatus: {
    backgroundColor: '#ffc107',
    color: 'black',
  },
  redStatus: {
    backgroundColor: '#dc3545',
    color: 'white',
  },
  aksi: {
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },
  actionButtonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  btn: {
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: 'white',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    transition: 'opacity 0.2s',
  },
  blueBtn: {
    backgroundColor: '#6366f1',
  },
  cyanBtn: {
    backgroundColor: '#06b6d4',
  },
  greenBtn: {
    backgroundColor: '#22c55e',
  },
  redBtn: {
    backgroundColor: '#ef4444',
  },
  
  // Popup styles
  popupContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    position: 'relative',
    minWidth: '450px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  popupTitle: {
    margin: '0 0 20px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#666',
    fontSize: '16px',
    padding: '5px',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  },
  popupImageContainer: {
    marginBottom: '20px',
  },
  popupImagePlaceholder: {
    width: '100%',
    height: '200px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '14px',
    border: '2px dashed #ddd',
  },
  popupFieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  popupField: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  popupFieldLabel: {
    minWidth: '130px',
    fontSize: '14px',
    color: '#555',
    fontWeight: '500',
  },
  popupFieldColon: {
    fontSize: '14px',
    color: '#555',
  },
    // Popup Konfirmasi Styles
  confirmationContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmationContent: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    position: 'relative',
    minWidth: '350px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  confirmationTitle: {
    margin: '0 0 15px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  confirmationText: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '25px',
  },
  confirmationButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  confirmButton: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.2s',
    minWidth: '100px',
  },
  approveButton: {
    backgroundColor: '#28a745',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    color: 'white',
  },
  // Timeline Popup Styles
  timelinePopupContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelinePopupContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    position: 'relative',
    minWidth: '800px',
    maxWidth: '90%',
    maxHeight: '80%',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  timelinePopupTitle: {
    margin: '0 0 20px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#6B7280',
    textAlign: 'left',
  },
  timelineTableContainer: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '20px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
  },
  timelineTable: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  timelineTableHeader: {
    backgroundColor: '#F9FAFB',
  },
  timelineTableHeaderCell: {
    fontWeight: 'bold',
    color: '#6B7280',
    backgroundColor: '#F9FAFB',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  timelineTableRow: {
    borderBottom: '1px solid #E5E7EB',
  },
  timelineTableCell: {
    padding: '12px 16px',
    textAlign: 'left',
    verticalAlign: 'middle',
    color: '#6B7280',
    fontSize: '14px',
  },
  timelineFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  timelineCloseButton: {
    backgroundColor: '#6366F1',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
};

export default App;