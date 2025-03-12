'use client';

import React from 'react';

export default function CVPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Curriculum Vitae</h1>
      <div style={styles.cvContainer}>
        <h2 style={styles.sectionTitle}>Identitas Diri</h2>
        <p><strong>Nama:</strong> Arie Nurhikmat</p>
        <p><strong>NIM:</strong> 232302011</p>
        <p><strong>Alamat:</strong> Rancaekek Wetan</p>
        <p><strong>Hobby:</strong> Bermain Game</p>
        <p><strong>Cita-cita:</strong> Presiden</p>
        
        <h2 style={styles.sectionTitle}>Pendidikan</h2>
        <p><strong>Universitas:</strong> Universitas Ma'soem</p>
        <p><strong>Jurusan:</strong> Komputerisasi Akuntansi</p>
        <p><strong>Semester:</strong> 4</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  title: {
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  cvContainer: {
    width: '100%',
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#2980b9',
    marginBottom: '10px',
    borderBottom: '2px solid #2980b9',
    paddingBottom: '5px',
  },
};