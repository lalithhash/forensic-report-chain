
// This is a mock database service
// In a real application, this would connect to a database like Firebase, Supabase, etc.

import { CFSL, Case, FSL, FSLMember, FinalReport, PoliceStation, TestReport, User } from "./types";
import { USER_ROLES } from "./constants";

// Mock database
let users: User[] = [
  {
    address: "0x0000000000000000000000000000000000000001",
    role: "INDIAN_GOVT",
  }
];
let cfsls: CFSL[] = [];
let fsls: FSL[] = [];
let fslMembers: FSLMember[] = [];
let policeStations: PoliceStation[] = [];
let cases: Case[] = [];
let testReports: TestReport[] = [];
let finalReports: FinalReport[] = [];

// User functions
export function getUser(address: string): User | null {
  const user = users.find(user => user.address.toLowerCase() === address.toLowerCase());
  return user || null;
}

export function addUser(user: User): void {
  // Check if user already exists
  const existingUserIndex = users.findIndex(u => u.address.toLowerCase() === user.address.toLowerCase());
  
  if (existingUserIndex !== -1) {
    // Update existing user
    users[existingUserIndex] = { ...users[existingUserIndex], ...user };
  } else {
    // Add new user
    users.push(user);
  }
}

// CFSL functions
export function addCFSL(cfslData: CFSL): void {
  cfsls.push(cfslData);
  
  // Also add as a user with role
  addUser({
    address: cfslData.address,
    role: "CFSL",
    ipfsHash: cfslData.ipfsHash,
  });
}

export function getAllCFSLs(): CFSL[] {
  return [...cfsls];
}

export function getCFSL(address: string): CFSL | null {
  const cfsl = cfsls.find(cfsl => cfsl.address.toLowerCase() === address.toLowerCase());
  return cfsl || null;
}

// FSL functions
export function addFSL(fslData: FSL): void {
  fsls.push(fslData);
  
  // Also add as a user with role
  addUser({
    address: fslData.address,
    role: "FSL",
    ipfsHash: fslData.ipfsHash,
  });
}

export function getAllFSLs(): FSL[] {
  return [...fsls];
}

export function getFSLsByCFSL(cfslAddress: string): FSL[] {
  return fsls.filter(fsl => fsl.cfslAddress.toLowerCase() === cfslAddress.toLowerCase());
}

export function getFSL(address: string): FSL | null {
  const fsl = fsls.find(fsl => fsl.address.toLowerCase() === address.toLowerCase());
  return fsl || null;
}

// FSL Member functions
export function addFSLMember(memberData: FSLMember): void {
  fslMembers.push(memberData);
  
  // Also add as a user with role
  addUser({
    address: memberData.address,
    role: "FSL_MEMBER",
    ipfsHash: memberData.ipfsHash,
  });
}

export function getAllFSLMembers(): FSLMember[] {
  return [...fslMembers];
}

export function getFSLMembersByFSL(fslAddress: string): FSLMember[] {
  return fslMembers.filter(member => member.fslAddress.toLowerCase() === fslAddress.toLowerCase());
}

export function getFSLMember(address: string): FSLMember | null {
  const member = fslMembers.find(member => member.address.toLowerCase() === address.toLowerCase());
  return member || null;
}

// Police Station functions
export function addPoliceStation(stationData: PoliceStation): void {
  policeStations.push(stationData);
  
  // Also add as a user with role
  addUser({
    address: stationData.address,
    role: "POLICE_STATION",
    ipfsHash: stationData.ipfsHash,
  });
}

export function getAllPoliceStations(): PoliceStation[] {
  return [...policeStations];
}

export function getPoliceStationsByFSL(fslAddress: string): PoliceStation[] {
  return policeStations.filter(station => station.fslAddress.toLowerCase() === fslAddress.toLowerCase());
}

export function getPoliceStation(address: string): PoliceStation | null {
  const station = policeStations.find(station => station.address.toLowerCase() === address.toLowerCase());
  return station || null;
}

// Case functions
export function addCase(caseData: Case): void {
  cases.push(caseData);
}

export function updateCase(caseId: string, updateData: Partial<Case>): void {
  const caseIndex = cases.findIndex(c => c.id === caseId);
  if (caseIndex !== -1) {
    cases[caseIndex] = { ...cases[caseIndex], ...updateData };
  }
}

export function getAllCases(): Case[] {
  return [...cases];
}

export function getUnacceptedCases(): Case[] {
  return cases.filter(c => !c.isAcceptedByFSL);
}

export function getCasesByPoliceStation(policeStationAddress: string): Case[] {
  return cases.filter(c => c.policeStationAddress.toLowerCase() === policeStationAddress.toLowerCase());
}

export function getCase(caseId: string): Case | null {
  const caseItem = cases.find(c => c.id === caseId);
  return caseItem || null;
}

// Test Report functions
export function addTestReport(reportData: TestReport): void {
  testReports.push(reportData);
}

export function updateTestReport(reportId: string, updateData: Partial<TestReport>): void {
  const reportIndex = testReports.findIndex(r => r.id === reportId);
  if (reportIndex !== -1) {
    testReports[reportIndex] = { ...testReports[reportIndex], ...updateData };
  }
}

export function addSignatureToReport(reportId: string, memberAddress: string): void {
  const reportIndex = testReports.findIndex(r => r.id === reportId);
  if (reportIndex !== -1) {
    if (!testReports[reportIndex].signatures.includes(memberAddress)) {
      testReports[reportIndex].signatures = [...testReports[reportIndex].signatures, memberAddress];
    }
  }
}

export function getAllTestReports(): TestReport[] {
  return [...testReports];
}

export function getTestReportsByCase(caseId: string): TestReport[] {
  return testReports.filter(r => r.caseId === caseId);
}

export function getTestReportsForMember(memberAddress: string): TestReport[] {
  return testReports.filter(r => 
    r.members.includes(memberAddress) || r.reportHead.toLowerCase() === memberAddress.toLowerCase()
  );
}

export function getTestReport(reportId: string): TestReport | null {
  const report = testReports.find(r => r.id === reportId);
  return report || null;
}

// Final Report functions
export function addFinalReport(reportData: FinalReport): void {
  finalReports.push(reportData);
}

export function getAllFinalReports(): FinalReport[] {
  return [...finalReports];
}

export function getFinalReportsByCase(caseId: string): FinalReport[] {
  return finalReports.filter(r => r.caseId === caseId);
}

export function getFinalReport(reportId: string): FinalReport | null {
  const report = finalReports.find(r => r.id === reportId);
  return report || null;
}
