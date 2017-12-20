import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const applyTraining = {
  type: ResopnseType,
  description: 'mutation for ofbiz applyTraining method',
  args:{workEffortId: {type: GraphQLString},approverId: {type: GraphQLString},partyId: {type: GraphQLString},trainingClassTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},approvalStatus: {type: GraphQLString},reason: {type: GraphQLString},trainingRequestId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/applyTraining?workEffortId=${args.workEffortId}approverId=${args.approverId}partyId=${args.partyId}trainingClassTypeId=${args.trainingClassTypeId}fromDate=${args.fromDate}approvalStatus=${args.approvalStatus}reason=${args.reason}trainingRequestId=${args.trainingRequestId}thruDate=${args.thruDate}`, null, req);
  }
};
export {applyTraining};


const assignTraining = {
  type: ResopnseType,
  description: 'mutation for ofbiz assignTraining method',
  args:{fromDate: {type: GraphQLString},approverId: {type: GraphQLString},partyId: {type: GraphQLString},trainingClassTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},approvalStatus: {type: GraphQLString},reason: {type: GraphQLString},trainingRequestId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/assignTraining?fromDate=${args.fromDate}approverId=${args.approverId}partyId=${args.partyId}trainingClassTypeId=${args.trainingClassTypeId}workEffortId=${args.workEffortId}approvalStatus=${args.approvalStatus}reason=${args.reason}trainingRequestId=${args.trainingRequestId}thruDate=${args.thruDate}`, null, req);
  }
};
export {assignTraining};


const createAgreementEmploymentAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementEmploymentAppl method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},agreementDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createAgreementEmploymentAppl?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}agreementDate=${args.agreementDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createAgreementEmploymentAppl};


const createEmplLeave = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplLeave method',
  args:{fromDate: {type: GraphQLString},approverPartyId: {type: GraphQLString},leaveTypeId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString},emplLeaveReasonTypeId: {type: GraphQLString},description: {type: GraphQLString},leaveStatus: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplLeave?fromDate=${args.fromDate}approverPartyId=${args.approverPartyId}leaveTypeId=${args.leaveTypeId}partyId=${args.partyId}thruDate=${args.thruDate}emplLeaveReasonTypeId=${args.emplLeaveReasonTypeId}description=${args.description}leaveStatus=${args.leaveStatus}`, null, req);
  }
};
export {createEmplLeave};


const createEmplLeaveReasonType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplLeaveReasonType method',
  args:{description: {type: GraphQLString},parentTypeId: {type: GraphQLString},emplLeaveReasonTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplLeaveReasonType?description=${args.description}parentTypeId=${args.parentTypeId}emplLeaveReasonTypeId=${args.emplLeaveReasonTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {createEmplLeaveReasonType};


const createEmplLeaveType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplLeaveType method',
  args:{description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},leaveTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplLeaveType?description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}leaveTypeId=${args.leaveTypeId}`, null, req);
  }
};
export {createEmplLeaveType};


const createEmplPosition = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPosition method',
  args:{estimatedThruDate: {type: GraphQLString},actualThruDate: {type: GraphQLString},exemptFlag: {type: GraphQLString},temporaryFlag: {type: GraphQLString},fulltimeFlag: {type: GraphQLString},emplPositionId: {type: GraphQLString},actualFromDate: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},salaryFlag: {type: GraphQLString},statusId: {type: GraphQLString},estimatedFromDate: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplPosition?estimatedThruDate=${args.estimatedThruDate}actualThruDate=${args.actualThruDate}exemptFlag=${args.exemptFlag}temporaryFlag=${args.temporaryFlag}fulltimeFlag=${args.fulltimeFlag}emplPositionId=${args.emplPositionId}actualFromDate=${args.actualFromDate}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}salaryFlag=${args.salaryFlag}statusId=${args.statusId}estimatedFromDate=${args.estimatedFromDate}emplPositionTypeId=${args.emplPositionTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {createEmplPosition};


const createEmplPositionFulfillment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionFulfillment method',
  args:{fromDate: {type: GraphQLString},emplPositionId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplPositionFulfillment?fromDate=${args.fromDate}emplPositionId=${args.emplPositionId}partyId=${args.partyId}comments=${args.comments}thruDate=${args.thruDate}`, null, req);
  }
};
export {createEmplPositionFulfillment};


const createEmplPositionReportingStruct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionReportingStruct method',
  args:{fromDate: {type: GraphQLString},emplPositionIdManagedBy: {type: GraphQLString},emplPositionIdReportingTo: {type: GraphQLString},comments: {type: GraphQLString},primaryFlag: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplPositionReportingStruct?fromDate=${args.fromDate}emplPositionIdManagedBy=${args.emplPositionIdManagedBy}emplPositionIdReportingTo=${args.emplPositionIdReportingTo}comments=${args.comments}primaryFlag=${args.primaryFlag}thruDate=${args.thruDate}`, null, req);
  }
};
export {createEmplPositionReportingStruct};


const createEmplPositionResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionResponsibility method',
  args:{fromDate: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplPositionResponsibility?fromDate=${args.fromDate}responsibilityTypeId=${args.responsibilityTypeId}emplPositionId=${args.emplPositionId}comments=${args.comments}thruDate=${args.thruDate}`, null, req);
  }
};
export {createEmplPositionResponsibility};


const createEmplPositionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionType method',
  args:{description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmplPositionType?description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}emplPositionTypeId=${args.emplPositionTypeId}`, null, req);
  }
};
export {createEmplPositionType};


const createEmployee = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmployee method',
  args:{postalAddContactMechPurpTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},emailAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmployee?postalAddContactMechPurpTypeId=${args.postalAddContactMechPurpTypeId}fromDate=${args.fromDate}emailAddress=${args.emailAddress}`, null, req);
  }
};
export {createEmployee};


const createEmployment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmployment method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},terminationReasonId: {type: GraphQLString},terminationTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmployment?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}terminationReasonId=${args.terminationReasonId}terminationTypeId=${args.terminationTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createEmployment};


const createEmploymentApp = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmploymentApp method',
  args:{applyingPartyId: {type: GraphQLString},statusId: {type: GraphQLString},approverPartyId: {type: GraphQLString},employmentAppSourceTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},applicationId: {type: GraphQLString},referredByPartyId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},applicationDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createEmploymentApp?applyingPartyId=${args.applyingPartyId}statusId=${args.statusId}approverPartyId=${args.approverPartyId}employmentAppSourceTypeId=${args.employmentAppSourceTypeId}emplPositionId=${args.emplPositionId}applicationId=${args.applicationId}referredByPartyId=${args.referredByPartyId}jobRequisitionId=${args.jobRequisitionId}applicationDate=${args.applicationDate}`, null, req);
  }
};
export {createEmploymentApp};


const createInternalJobPosting = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInternalJobPosting method',
  args:{applyingPartyId: {type: GraphQLString},approverPartyId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},statusId: {type: GraphQLString},employmentAppSourceTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},applicationId: {type: GraphQLString},referredByPartyId: {type: GraphQLString},applicationDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createInternalJobPosting?applyingPartyId=${args.applyingPartyId}approverPartyId=${args.approverPartyId}jobRequisitionId=${args.jobRequisitionId}statusId=${args.statusId}employmentAppSourceTypeId=${args.employmentAppSourceTypeId}emplPositionId=${args.emplPositionId}applicationId=${args.applicationId}referredByPartyId=${args.referredByPartyId}applicationDate=${args.applicationDate}`, null, req);
  }
};
export {createInternalJobPosting};


const createJobInterview = {
  type: ResopnseType,
  description: 'mutation for ofbiz createJobInterview method',
  args:{jobIntervieweePartyId: {type: GraphQLString},jobInterviewerPartyId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},jobInterviewId: {type: GraphQLString},jobInterviewTypeId: {type: GraphQLString},gradeSecuredEnumId: {type: GraphQLString},jobInterviewDate: {type: GraphQLString},jobInterviewResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createJobInterview?jobIntervieweePartyId=${args.jobIntervieweePartyId}jobInterviewerPartyId=${args.jobInterviewerPartyId}jobRequisitionId=${args.jobRequisitionId}jobInterviewId=${args.jobInterviewId}jobInterviewTypeId=${args.jobInterviewTypeId}gradeSecuredEnumId=${args.gradeSecuredEnumId}jobInterviewDate=${args.jobInterviewDate}jobInterviewResult=${args.jobInterviewResult}`, null, req);
  }
};
export {createJobInterview};


const createJobInterviewType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createJobInterviewType method',
  args:{description: {type: GraphQLString},jobInterviewTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createJobInterviewType?description=${args.description}jobInterviewTypeId=${args.jobInterviewTypeId}`, null, req);
  }
};
export {createJobInterviewType};


const createJobRequisition = {
  type: ResopnseType,
  description: 'mutation for ofbiz createJobRequisition method',
  args:{qualification: {type: GraphQLString},skillTypeId: {type: GraphQLString},experienceMonths: {type: GraphQLInt},jobLocation: {type: GraphQLString},noOfResources: {type: GraphQLInt},experienceYears: {type: GraphQLInt},durationMonths: {type: GraphQLInt},gender: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},examTypeEnumId: {type: GraphQLString},jobRequisitionDate: {type: GraphQLString},requiredOnDate: {type: GraphQLString},age: {type: GraphQLInt},jobPostingTypeEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createJobRequisition?qualification=${args.qualification}skillTypeId=${args.skillTypeId}experienceMonths=${args.experienceMonths}jobLocation=${args.jobLocation}noOfResources=${args.noOfResources}experienceYears=${args.experienceYears}durationMonths=${args.durationMonths}gender=${args.gender}jobRequisitionId=${args.jobRequisitionId}examTypeEnumId=${args.examTypeEnumId}jobRequisitionDate=${args.jobRequisitionDate}requiredOnDate=${args.requiredOnDate}age=${args.age}jobPostingTypeEnumId=${args.jobPostingTypeEnumId}`, null, req);
  }
};
export {createJobRequisition};


const createPartyBenefit = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyBenefit method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},benefitTypeId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},availableTime: {type: GraphQLInt},cost: {type: GraphQLFloat},actualEmployerPaidPercent: {type: GraphQLFloat},periodTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPartyBenefit?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}benefitTypeId=${args.benefitTypeId}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}availableTime=${args.availableTime}cost=${args.cost}actualEmployerPaidPercent=${args.actualEmployerPaidPercent}periodTypeId=${args.periodTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyBenefit};


const createPartyQual = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyQual method',
  args:{partyQualTypeId: {type: GraphQLString},partyId: {type: GraphQLString},qualificationDesc: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},verifStatusId: {type: GraphQLString},title: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPartyQual?partyQualTypeId=${args.partyQualTypeId}partyId=${args.partyId}qualificationDesc=${args.qualificationDesc}fromDate=${args.fromDate}statusId=${args.statusId}verifStatusId=${args.verifStatusId}title=${args.title}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyQual};


const createPartyQualType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyQualType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},partyQualTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPartyQualType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}partyQualTypeId=${args.partyQualTypeId}description=${args.description}`, null, req);
  }
};
export {createPartyQualType};


const createPartyResume = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyResume method',
  args:{resumeText: {type: GraphQLString},resumeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},resumeDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPartyResume?resumeText=${args.resumeText}resumeId=${args.resumeId}contentId=${args.contentId}partyId=${args.partyId}resumeDate=${args.resumeDate}`, null, req);
  }
};
export {createPartyResume};


const createPartySkill = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartySkill method',
  args:{skillTypeId: {type: GraphQLString},partyId: {type: GraphQLString},rating: {type: GraphQLInt},yearsExperience: {type: GraphQLInt},startedUsingDate: {type: GraphQLString},skillLevel: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPartySkill?skillTypeId=${args.skillTypeId}partyId=${args.partyId}rating=${args.rating}yearsExperience=${args.yearsExperience}startedUsingDate=${args.startedUsingDate}skillLevel=${args.skillLevel}`, null, req);
  }
};
export {createPartySkill};


const createPayGrade = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayGrade method',
  args:{payGradeName: {type: GraphQLString},comments: {type: GraphQLString},payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPayGrade?payGradeName=${args.payGradeName}comments=${args.comments}payGradeId=${args.payGradeId}`, null, req);
  }
};
export {createPayGrade};


const createPayHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayHistory method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},salaryStepSeqId: {type: GraphQLString},periodTypeId: {type: GraphQLString},payGradeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPayHistory?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}amount=${args.amount}comments=${args.comments}salaryStepSeqId=${args.salaryStepSeqId}periodTypeId=${args.periodTypeId}payGradeId=${args.payGradeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPayHistory};


const createPayrollPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayrollPreference method',
  args:{payrollPreferenceSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},routingNumber: {type: GraphQLString},flatAmount: {type: GraphQLFloat},percentage: {type: GraphQLFloat},periodTypeId: {type: GraphQLString},deductionTypeId: {type: GraphQLString},bankName: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},accountNumber: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPayrollPreference?payrollPreferenceSeqId=${args.payrollPreferenceSeqId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}fromDate=${args.fromDate}routingNumber=${args.routingNumber}flatAmount=${args.flatAmount}percentage=${args.percentage}periodTypeId=${args.periodTypeId}deductionTypeId=${args.deductionTypeId}bankName=${args.bankName}paymentMethodTypeId=${args.paymentMethodTypeId}accountNumber=${args.accountNumber}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPayrollPreference};


const createPerfReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPerfReview method',
  args:{employeeRoleTypeId: {type: GraphQLString},employeePartyId: {type: GraphQLString},fromDate: {type: GraphQLString},managerRoleTypeId: {type: GraphQLString},comments: {type: GraphQLString},paymentId: {type: GraphQLString},emplPositionId: {type: GraphQLString},perfReviewId: {type: GraphQLString},managerPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPerfReview?employeeRoleTypeId=${args.employeeRoleTypeId}employeePartyId=${args.employeePartyId}fromDate=${args.fromDate}managerRoleTypeId=${args.managerRoleTypeId}comments=${args.comments}paymentId=${args.paymentId}emplPositionId=${args.emplPositionId}perfReviewId=${args.perfReviewId}managerPartyId=${args.managerPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPerfReview};


const createPerfReviewItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPerfReviewItem method',
  args:{employeeRoleTypeId: {type: GraphQLString},employeePartyId: {type: GraphQLString},perfReviewId: {type: GraphQLString},perfReviewItemTypeId: {type: GraphQLString},perfRatingTypeId: {type: GraphQLString},comments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPerfReviewItem?employeeRoleTypeId=${args.employeeRoleTypeId}employeePartyId=${args.employeePartyId}perfReviewId=${args.perfReviewId}perfReviewItemTypeId=${args.perfReviewItemTypeId}perfRatingTypeId=${args.perfRatingTypeId}comments=${args.comments}`, null, req);
  }
};
export {createPerfReviewItem};


const createPerformanceNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPerformanceNote method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},communicationDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createPerformanceNote?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}comments=${args.comments}communicationDate=${args.communicationDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPerformanceNote};


const createResponsibilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createResponsibilityType method',
  args:{description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createResponsibilityType?description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}responsibilityTypeId=${args.responsibilityTypeId}`, null, req);
  }
};
export {createResponsibilityType};


const createSalaryStep = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalaryStep method',
  args:{fromDate: {type: GraphQLString},salaryStepSeqId: {type: GraphQLString},payGradeId: {type: GraphQLString},amount: {type: GraphQLFloat},lastModifiedByUserLogin: {type: GraphQLString},dateModified: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createSalaryStep?fromDate=${args.fromDate}salaryStepSeqId=${args.salaryStepSeqId}payGradeId=${args.payGradeId}amount=${args.amount}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}dateModified=${args.dateModified}createdByUserLogin=${args.createdByUserLogin}thruDate=${args.thruDate}`, null, req);
  }
};
export {createSalaryStep};


const createSkillType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSkillType method',
  args:{description: {type: GraphQLString},skillTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createSkillType?description=${args.description}skillTypeId=${args.skillTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {createSkillType};


const createTerminationReason = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTerminationReason method',
  args:{description: {type: GraphQLString},terminationReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createTerminationReason?description=${args.description}terminationReasonId=${args.terminationReasonId}`, null, req);
  }
};
export {createTerminationReason};


const createTerminationType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTerminationType method',
  args:{description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},terminationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createTerminationType?description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}terminationTypeId=${args.terminationTypeId}`, null, req);
  }
};
export {createTerminationType};


const createTrainingTypes = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTrainingTypes method',
  args:{description: {type: GraphQLString},trainingClassTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createTrainingTypes?description=${args.description}trainingClassTypeId=${args.trainingClassTypeId}parentTypeId=${args.parentTypeId}`, null, req);
  }
};
export {createTrainingTypes};


const createUnemploymentClaim = {
  type: ResopnseType,
  description: 'mutation for ofbiz createUnemploymentClaim method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},unemploymentClaimId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},statusId: {type: GraphQLString},description: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},unemploymentClaimDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createUnemploymentClaim?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}unemploymentClaimId=${args.unemploymentClaimId}partyIdFrom=${args.partyIdFrom}statusId=${args.statusId}description=${args.description}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}unemploymentClaimDate=${args.unemploymentClaimDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createUnemploymentClaim};


const createValidResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createValidResponsibility method',
  args:{fromDate: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/createValidResponsibility?fromDate=${args.fromDate}responsibilityTypeId=${args.responsibilityTypeId}emplPositionTypeId=${args.emplPositionTypeId}comments=${args.comments}thruDate=${args.thruDate}`, null, req);
  }
};
export {createValidResponsibility};


const deleteAgreementEmploymentAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementEmploymentAppl method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteAgreementEmploymentAppl?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {deleteAgreementEmploymentAppl};


const deleteEmplLeave = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplLeave method',
  args:{fromDate: {type: GraphQLString},leaveTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplLeave?fromDate=${args.fromDate}leaveTypeId=${args.leaveTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteEmplLeave};


const deleteEmplLeaveReasonType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplLeaveReasonType method',
  args:{emplLeaveReasonTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplLeaveReasonType?emplLeaveReasonTypeId=${args.emplLeaveReasonTypeId}`, null, req);
  }
};
export {deleteEmplLeaveReasonType};


const deleteEmplLeaveType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplLeaveType method',
  args:{leaveTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplLeaveType?leaveTypeId=${args.leaveTypeId}`, null, req);
  }
};
export {deleteEmplLeaveType};


const deleteEmplPosition = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPosition method',
  args:{emplPositionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplPosition?emplPositionId=${args.emplPositionId}`, null, req);
  }
};
export {deleteEmplPosition};


const deleteEmplPositionFulfillment = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionFulfillment method',
  args:{fromDate: {type: GraphQLString},emplPositionId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplPositionFulfillment?fromDate=${args.fromDate}emplPositionId=${args.emplPositionId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteEmplPositionFulfillment};


const deleteEmplPositionReportingStruct = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionReportingStruct method',
  args:{fromDate: {type: GraphQLString},emplPositionIdManagedBy: {type: GraphQLString},emplPositionIdReportingTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplPositionReportingStruct?fromDate=${args.fromDate}emplPositionIdManagedBy=${args.emplPositionIdManagedBy}emplPositionIdReportingTo=${args.emplPositionIdReportingTo}`, null, req);
  }
};
export {deleteEmplPositionReportingStruct};


const deleteEmplPositionResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionResponsibility method',
  args:{fromDate: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplPositionResponsibility?fromDate=${args.fromDate}responsibilityTypeId=${args.responsibilityTypeId}emplPositionId=${args.emplPositionId}`, null, req);
  }
};
export {deleteEmplPositionResponsibility};


const deleteEmplPositionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionType method',
  args:{emplPositionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplPositionType?emplPositionTypeId=${args.emplPositionTypeId}`, null, req);
  }
};
export {deleteEmplPositionType};


const deleteEmplPositionTypeRate = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionTypeRate method',
  args:{fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateAmountFromDate: {type: GraphQLString},periodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmplPositionTypeRate?fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateAmountFromDate=${args.rateAmountFromDate}periodTypeId=${args.periodTypeId}`, null, req);
  }
};
export {deleteEmplPositionTypeRate};


const deleteEmployment = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmployment method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmployment?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {deleteEmployment};


const deleteEmploymentApp = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmploymentApp method',
  args:{applicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteEmploymentApp?applicationId=${args.applicationId}`, null, req);
  }
};
export {deleteEmploymentApp};


const deleteInternalJobPosting = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInternalJobPosting method',
  args:{applicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteInternalJobPosting?applicationId=${args.applicationId}`, null, req);
  }
};
export {deleteInternalJobPosting};


const deleteJobInterview = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteJobInterview method',
  args:{jobInterviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteJobInterview?jobInterviewId=${args.jobInterviewId}`, null, req);
  }
};
export {deleteJobInterview};


const deleteJobInterviewType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteJobInterviewType method',
  args:{jobInterviewTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteJobInterviewType?jobInterviewTypeId=${args.jobInterviewTypeId}`, null, req);
  }
};
export {deleteJobInterviewType};


const deleteJobRequisition = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteJobRequisition method',
  args:{jobRequisitionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteJobRequisition?jobRequisitionId=${args.jobRequisitionId}`, null, req);
  }
};
export {deleteJobRequisition};


const deletePartyBenefit = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyBenefit method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},benefitTypeId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePartyBenefit?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}benefitTypeId=${args.benefitTypeId}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {deletePartyBenefit};


const deletePartyQual = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyQual method',
  args:{fromDate: {type: GraphQLString},partyQualTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePartyQual?fromDate=${args.fromDate}partyQualTypeId=${args.partyQualTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyQual};


const deletePartyQualType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyQualType method',
  args:{partyQualTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePartyQualType?partyQualTypeId=${args.partyQualTypeId}`, null, req);
  }
};
export {deletePartyQualType};


const deletePartyResume = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyResume method',
  args:{resumeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePartyResume?resumeId=${args.resumeId}`, null, req);
  }
};
export {deletePartyResume};


const deletePartySkill = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartySkill method',
  args:{skillTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePartySkill?skillTypeId=${args.skillTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartySkill};


const deletePayGrade = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePayGrade method',
  args:{payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePayGrade?payGradeId=${args.payGradeId}`, null, req);
  }
};
export {deletePayGrade};


const deletePayHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePayHistory method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePayHistory?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {deletePayHistory};


const deletePayrollPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePayrollPreference method',
  args:{payrollPreferenceSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePayrollPreference?payrollPreferenceSeqId=${args.payrollPreferenceSeqId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePayrollPreference};


const deletePerfReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePerfReview method',
  args:{employeeRoleTypeId: {type: GraphQLString},employeePartyId: {type: GraphQLString},perfReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePerfReview?employeeRoleTypeId=${args.employeeRoleTypeId}employeePartyId=${args.employeePartyId}perfReviewId=${args.perfReviewId}`, null, req);
  }
};
export {deletePerfReview};


const deletePerfReviewItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePerfReviewItem method',
  args:{employeeRoleTypeId: {type: GraphQLString},perfReviewItemSeqId: {type: GraphQLString},employeePartyId: {type: GraphQLString},perfReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePerfReviewItem?employeeRoleTypeId=${args.employeeRoleTypeId}perfReviewItemSeqId=${args.perfReviewItemSeqId}employeePartyId=${args.employeePartyId}perfReviewId=${args.perfReviewId}`, null, req);
  }
};
export {deletePerfReviewItem};


const deletePerformanceNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePerformanceNote method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deletePerformanceNote?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePerformanceNote};


const deleteResponsibilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteResponsibilityType method',
  args:{responsibilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteResponsibilityType?responsibilityTypeId=${args.responsibilityTypeId}`, null, req);
  }
};
export {deleteResponsibilityType};


const deleteSalaryStep = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalaryStep method',
  args:{fromDate: {type: GraphQLString},salaryStepSeqId: {type: GraphQLString},payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteSalaryStep?fromDate=${args.fromDate}salaryStepSeqId=${args.salaryStepSeqId}payGradeId=${args.payGradeId}`, null, req);
  }
};
export {deleteSalaryStep};


const deleteSkillType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSkillType method',
  args:{skillTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteSkillType?skillTypeId=${args.skillTypeId}`, null, req);
  }
};
export {deleteSkillType};


const deleteTerminationReason = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTerminationReason method',
  args:{terminationReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteTerminationReason?terminationReasonId=${args.terminationReasonId}`, null, req);
  }
};
export {deleteTerminationReason};


const deleteTerminationType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTerminationType method',
  args:{terminationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteTerminationType?terminationTypeId=${args.terminationTypeId}`, null, req);
  }
};
export {deleteTerminationType};


const deleteTrainingTypes = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTrainingTypes method',
  args:{trainingClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteTrainingTypes?trainingClassTypeId=${args.trainingClassTypeId}`, null, req);
  }
};
export {deleteTrainingTypes};


const deleteUnemploymentClaim = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteUnemploymentClaim method',
  args:{unemploymentClaimId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteUnemploymentClaim?unemploymentClaimId=${args.unemploymentClaimId}`, null, req);
  }
};
export {deleteUnemploymentClaim};


const deleteValidResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteValidResponsibility method',
  args:{fromDate: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/deleteValidResponsibility?fromDate=${args.fromDate}responsibilityTypeId=${args.responsibilityTypeId}emplPositionTypeId=${args.emplPositionTypeId}`, null, req);
  }
};
export {deleteValidResponsibility};


const getCurrentPartyEmploymentData = {
  type: ResopnseType,
  description: 'mutation for ofbiz getCurrentPartyEmploymentData method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/getCurrentPartyEmploymentData?partyId=${args.partyId}`, null, req);
  }
};
export {getCurrentPartyEmploymentData};


const humanResManagerPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz humanResManagerPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/humanResManagerPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {humanResManagerPermission};


const updateAgreementEmploymentAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementEmploymentAppl method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},agreementDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateAgreementEmploymentAppl?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}agreementDate=${args.agreementDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateAgreementEmploymentAppl};


const updateApprovalStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateApprovalStatus method',
  args:{applicationId: {type: GraphQLString},applyingPartyId: {type: GraphQLString},statusId: {type: GraphQLString},approverPartyId: {type: GraphQLString},employmentAppSourceTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},referredByPartyId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},applicationDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateApprovalStatus?applicationId=${args.applicationId}applyingPartyId=${args.applyingPartyId}statusId=${args.statusId}approverPartyId=${args.approverPartyId}employmentAppSourceTypeId=${args.employmentAppSourceTypeId}emplPositionId=${args.emplPositionId}referredByPartyId=${args.referredByPartyId}jobRequisitionId=${args.jobRequisitionId}applicationDate=${args.applicationDate}`, null, req);
  }
};
export {updateApprovalStatus};


const updateEmplLeave = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplLeave method',
  args:{fromDate: {type: GraphQLString},approverPartyId: {type: GraphQLString},leaveTypeId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString},emplLeaveReasonTypeId: {type: GraphQLString},description: {type: GraphQLString},leaveStatus: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplLeave?fromDate=${args.fromDate}approverPartyId=${args.approverPartyId}leaveTypeId=${args.leaveTypeId}partyId=${args.partyId}thruDate=${args.thruDate}emplLeaveReasonTypeId=${args.emplLeaveReasonTypeId}description=${args.description}leaveStatus=${args.leaveStatus}`, null, req);
  }
};
export {updateEmplLeave};


const updateEmplLeaveReasonType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplLeaveReasonType method',
  args:{emplLeaveReasonTypeId: {type: GraphQLString},description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplLeaveReasonType?emplLeaveReasonTypeId=${args.emplLeaveReasonTypeId}description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateEmplLeaveReasonType};


const updateEmplLeaveStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplLeaveStatus method',
  args:{fromDate: {type: GraphQLString},leaveTypeId: {type: GraphQLString},partyId: {type: GraphQLString},approverPartyId: {type: GraphQLString},emplLeaveReasonTypeId: {type: GraphQLString},description: {type: GraphQLString},leaveStatus: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplLeaveStatus?fromDate=${args.fromDate}leaveTypeId=${args.leaveTypeId}partyId=${args.partyId}approverPartyId=${args.approverPartyId}emplLeaveReasonTypeId=${args.emplLeaveReasonTypeId}description=${args.description}leaveStatus=${args.leaveStatus}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEmplLeaveStatus};


const updateEmplLeaveType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplLeaveType method',
  args:{description: {type: GraphQLString},leaveTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplLeaveType?description=${args.description}leaveTypeId=${args.leaveTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateEmplLeaveType};


const updateEmplPosition = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPosition method',
  args:{emplPositionId: {type: GraphQLString},estimatedThruDate: {type: GraphQLString},actualThruDate: {type: GraphQLString},exemptFlag: {type: GraphQLString},temporaryFlag: {type: GraphQLString},fulltimeFlag: {type: GraphQLString},actualFromDate: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},salaryFlag: {type: GraphQLString},statusId: {type: GraphQLString},estimatedFromDate: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplPosition?emplPositionId=${args.emplPositionId}estimatedThruDate=${args.estimatedThruDate}actualThruDate=${args.actualThruDate}exemptFlag=${args.exemptFlag}temporaryFlag=${args.temporaryFlag}fulltimeFlag=${args.fulltimeFlag}actualFromDate=${args.actualFromDate}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}salaryFlag=${args.salaryFlag}statusId=${args.statusId}estimatedFromDate=${args.estimatedFromDate}emplPositionTypeId=${args.emplPositionTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {updateEmplPosition};


const updateEmplPositionFulfillment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionFulfillment method',
  args:{fromDate: {type: GraphQLString},emplPositionId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplPositionFulfillment?fromDate=${args.fromDate}emplPositionId=${args.emplPositionId}partyId=${args.partyId}comments=${args.comments}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEmplPositionFulfillment};


const updateEmplPositionReportingStruct = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionReportingStruct method',
  args:{fromDate: {type: GraphQLString},emplPositionIdManagedBy: {type: GraphQLString},emplPositionIdReportingTo: {type: GraphQLString},comments: {type: GraphQLString},primaryFlag: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplPositionReportingStruct?fromDate=${args.fromDate}emplPositionIdManagedBy=${args.emplPositionIdManagedBy}emplPositionIdReportingTo=${args.emplPositionIdReportingTo}comments=${args.comments}primaryFlag=${args.primaryFlag}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEmplPositionReportingStruct};


const updateEmplPositionResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionResponsibility method',
  args:{fromDate: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplPositionResponsibility?fromDate=${args.fromDate}responsibilityTypeId=${args.responsibilityTypeId}emplPositionId=${args.emplPositionId}comments=${args.comments}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEmplPositionResponsibility};


const updateEmplPositionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionType method',
  args:{emplPositionTypeId: {type: GraphQLString},description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplPositionType?emplPositionTypeId=${args.emplPositionTypeId}description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateEmplPositionType};


const updateEmplPositionTypeRate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionTypeRate method',
  args:{rateTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},periodTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},rateAmount: {type: GraphQLFloat},salaryStepSeqId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},payGradeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmplPositionTypeRate?rateTypeId=${args.rateTypeId}emplPositionTypeId=${args.emplPositionTypeId}periodTypeId=${args.periodTypeId}fromDate=${args.fromDate}rateAmount=${args.rateAmount}salaryStepSeqId=${args.salaryStepSeqId}rateCurrencyUomId=${args.rateCurrencyUomId}payGradeId=${args.payGradeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEmplPositionTypeRate};


const updateEmployment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmployment method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},terminationReasonId: {type: GraphQLString},terminationTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmployment?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}terminationReasonId=${args.terminationReasonId}terminationTypeId=${args.terminationTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateEmployment};


const updateEmploymentApp = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmploymentApp method',
  args:{applicationId: {type: GraphQLString},applyingPartyId: {type: GraphQLString},statusId: {type: GraphQLString},approverPartyId: {type: GraphQLString},employmentAppSourceTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},referredByPartyId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},applicationDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateEmploymentApp?applicationId=${args.applicationId}applyingPartyId=${args.applyingPartyId}statusId=${args.statusId}approverPartyId=${args.approverPartyId}employmentAppSourceTypeId=${args.employmentAppSourceTypeId}emplPositionId=${args.emplPositionId}referredByPartyId=${args.referredByPartyId}jobRequisitionId=${args.jobRequisitionId}applicationDate=${args.applicationDate}`, null, req);
  }
};
export {updateEmploymentApp};


const updateInternalJobPosting = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInternalJobPosting method',
  args:{applyingPartyId: {type: GraphQLString},approverPartyId: {type: GraphQLString},applicationId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},statusId: {type: GraphQLString},employmentAppSourceTypeId: {type: GraphQLString},emplPositionId: {type: GraphQLString},referredByPartyId: {type: GraphQLString},applicationDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateInternalJobPosting?applyingPartyId=${args.applyingPartyId}approverPartyId=${args.approverPartyId}applicationId=${args.applicationId}jobRequisitionId=${args.jobRequisitionId}statusId=${args.statusId}employmentAppSourceTypeId=${args.employmentAppSourceTypeId}emplPositionId=${args.emplPositionId}referredByPartyId=${args.referredByPartyId}applicationDate=${args.applicationDate}`, null, req);
  }
};
export {updateInternalJobPosting};


const updateJobInterview = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateJobInterview method',
  args:{jobInterviewId: {type: GraphQLString},jobInterviewTypeId: {type: GraphQLString},jobIntervieweePartyId: {type: GraphQLString},jobRequisitionId: {type: GraphQLString},gradeSecuredEnumId: {type: GraphQLString},jobInterviewDate: {type: GraphQLString},jobInterviewerPartyId: {type: GraphQLString},jobInterviewResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateJobInterview?jobInterviewId=${args.jobInterviewId}jobInterviewTypeId=${args.jobInterviewTypeId}jobIntervieweePartyId=${args.jobIntervieweePartyId}jobRequisitionId=${args.jobRequisitionId}gradeSecuredEnumId=${args.gradeSecuredEnumId}jobInterviewDate=${args.jobInterviewDate}jobInterviewerPartyId=${args.jobInterviewerPartyId}jobInterviewResult=${args.jobInterviewResult}`, null, req);
  }
};
export {updateJobInterview};


const updateJobInterviewType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateJobInterviewType method',
  args:{jobInterviewTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateJobInterviewType?jobInterviewTypeId=${args.jobInterviewTypeId}description=${args.description}`, null, req);
  }
};
export {updateJobInterviewType};


const updateJobRequisition = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateJobRequisition method',
  args:{skillTypeId: {type: GraphQLString},experienceMonths: {type: GraphQLInt},jobLocation: {type: GraphQLString},noOfResources: {type: GraphQLInt},jobRequisitionId: {type: GraphQLString},experienceYears: {type: GraphQLInt},qualification: {type: GraphQLString},durationMonths: {type: GraphQLInt},gender: {type: GraphQLString},examTypeEnumId: {type: GraphQLString},jobRequisitionDate: {type: GraphQLString},requiredOnDate: {type: GraphQLString},age: {type: GraphQLInt},jobPostingTypeEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateJobRequisition?skillTypeId=${args.skillTypeId}experienceMonths=${args.experienceMonths}jobLocation=${args.jobLocation}noOfResources=${args.noOfResources}jobRequisitionId=${args.jobRequisitionId}experienceYears=${args.experienceYears}qualification=${args.qualification}durationMonths=${args.durationMonths}gender=${args.gender}examTypeEnumId=${args.examTypeEnumId}jobRequisitionDate=${args.jobRequisitionDate}requiredOnDate=${args.requiredOnDate}age=${args.age}jobPostingTypeEnumId=${args.jobPostingTypeEnumId}`, null, req);
  }
};
export {updateJobRequisition};


const updatePartyBenefit = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyBenefit method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},benefitTypeId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},availableTime: {type: GraphQLInt},cost: {type: GraphQLFloat},actualEmployerPaidPercent: {type: GraphQLFloat},periodTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePartyBenefit?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}benefitTypeId=${args.benefitTypeId}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}availableTime=${args.availableTime}cost=${args.cost}actualEmployerPaidPercent=${args.actualEmployerPaidPercent}periodTypeId=${args.periodTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyBenefit};


const updatePartyQual = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyQual method',
  args:{fromDate: {type: GraphQLString},partyQualTypeId: {type: GraphQLString},partyId: {type: GraphQLString},qualificationDesc: {type: GraphQLString},statusId: {type: GraphQLString},verifStatusId: {type: GraphQLString},title: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePartyQual?fromDate=${args.fromDate}partyQualTypeId=${args.partyQualTypeId}partyId=${args.partyId}qualificationDesc=${args.qualificationDesc}statusId=${args.statusId}verifStatusId=${args.verifStatusId}title=${args.title}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyQual};


const updatePartyQualType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyQualType method',
  args:{partyQualTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePartyQualType?partyQualTypeId=${args.partyQualTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePartyQualType};


const updatePartyResume = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyResume method',
  args:{resumeId: {type: GraphQLString},resumeText: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},resumeDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePartyResume?resumeId=${args.resumeId}resumeText=${args.resumeText}contentId=${args.contentId}partyId=${args.partyId}resumeDate=${args.resumeDate}`, null, req);
  }
};
export {updatePartyResume};


const updatePartySkill = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartySkill method',
  args:{skillTypeId: {type: GraphQLString},partyId: {type: GraphQLString},rating: {type: GraphQLInt},yearsExperience: {type: GraphQLInt},startedUsingDate: {type: GraphQLString},skillLevel: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePartySkill?skillTypeId=${args.skillTypeId}partyId=${args.partyId}rating=${args.rating}yearsExperience=${args.yearsExperience}startedUsingDate=${args.startedUsingDate}skillLevel=${args.skillLevel}`, null, req);
  }
};
export {updatePartySkill};


const updatePayGrade = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayGrade method',
  args:{payGradeName: {type: GraphQLString},payGradeId: {type: GraphQLString},comments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePayGrade?payGradeName=${args.payGradeName}payGradeId=${args.payGradeId}comments=${args.comments}`, null, req);
  }
};
export {updatePayGrade};


const updatePayHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayHistory method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},salaryStepSeqId: {type: GraphQLString},periodTypeId: {type: GraphQLString},payGradeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePayHistory?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}amount=${args.amount}comments=${args.comments}salaryStepSeqId=${args.salaryStepSeqId}periodTypeId=${args.periodTypeId}payGradeId=${args.payGradeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePayHistory};


const updatePayrollPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayrollPreference method',
  args:{payrollPreferenceSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},routingNumber: {type: GraphQLString},flatAmount: {type: GraphQLFloat},percentage: {type: GraphQLFloat},periodTypeId: {type: GraphQLString},deductionTypeId: {type: GraphQLString},bankName: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},accountNumber: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePayrollPreference?payrollPreferenceSeqId=${args.payrollPreferenceSeqId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}fromDate=${args.fromDate}routingNumber=${args.routingNumber}flatAmount=${args.flatAmount}percentage=${args.percentage}periodTypeId=${args.periodTypeId}deductionTypeId=${args.deductionTypeId}bankName=${args.bankName}paymentMethodTypeId=${args.paymentMethodTypeId}accountNumber=${args.accountNumber}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePayrollPreference};


const updatePerfReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePerfReview method',
  args:{employeeRoleTypeId: {type: GraphQLString},employeePartyId: {type: GraphQLString},perfReviewId: {type: GraphQLString},fromDate: {type: GraphQLString},managerRoleTypeId: {type: GraphQLString},comments: {type: GraphQLString},paymentId: {type: GraphQLString},emplPositionId: {type: GraphQLString},managerPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePerfReview?employeeRoleTypeId=${args.employeeRoleTypeId}employeePartyId=${args.employeePartyId}perfReviewId=${args.perfReviewId}fromDate=${args.fromDate}managerRoleTypeId=${args.managerRoleTypeId}comments=${args.comments}paymentId=${args.paymentId}emplPositionId=${args.emplPositionId}managerPartyId=${args.managerPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePerfReview};


const updatePerfReviewItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePerfReviewItem method',
  args:{employeeRoleTypeId: {type: GraphQLString},perfReviewItemSeqId: {type: GraphQLString},employeePartyId: {type: GraphQLString},perfReviewId: {type: GraphQLString},perfReviewItemTypeId: {type: GraphQLString},perfRatingTypeId: {type: GraphQLString},comments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePerfReviewItem?employeeRoleTypeId=${args.employeeRoleTypeId}perfReviewItemSeqId=${args.perfReviewItemSeqId}employeePartyId=${args.employeePartyId}perfReviewId=${args.perfReviewId}perfReviewItemTypeId=${args.perfReviewItemTypeId}perfRatingTypeId=${args.perfRatingTypeId}comments=${args.comments}`, null, req);
  }
};
export {updatePerfReviewItem};


const updatePerformanceNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePerformanceNote method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},communicationDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updatePerformanceNote?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}comments=${args.comments}communicationDate=${args.communicationDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePerformanceNote};


const updateResponsibilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateResponsibilityType method',
  args:{responsibilityTypeId: {type: GraphQLString},description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateResponsibilityType?responsibilityTypeId=${args.responsibilityTypeId}description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateResponsibilityType};


const updateSalaryStep = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalaryStep method',
  args:{fromDate: {type: GraphQLString},salaryStepSeqId: {type: GraphQLString},payGradeId: {type: GraphQLString},amount: {type: GraphQLFloat},lastModifiedByUserLogin: {type: GraphQLString},dateModified: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateSalaryStep?fromDate=${args.fromDate}salaryStepSeqId=${args.salaryStepSeqId}payGradeId=${args.payGradeId}amount=${args.amount}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}dateModified=${args.dateModified}createdByUserLogin=${args.createdByUserLogin}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateSalaryStep};


const updateSkillType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSkillType method',
  args:{skillTypeId: {type: GraphQLString},description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateSkillType?skillTypeId=${args.skillTypeId}description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateSkillType};


const updateTerminationReason = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTerminationReason method',
  args:{terminationReasonId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateTerminationReason?terminationReasonId=${args.terminationReasonId}description=${args.description}`, null, req);
  }
};
export {updateTerminationReason};


const updateTerminationType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTerminationType method',
  args:{terminationTypeId: {type: GraphQLString},description: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateTerminationType?terminationTypeId=${args.terminationTypeId}description=${args.description}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateTerminationType};


const updateTrainingStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTrainingStatus method',
  args:{fromDate: {type: GraphQLString},reason: {type: GraphQLString},partyId: {type: GraphQLString},trainingClassTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},approvalStatus: {type: GraphQLString},trainingRequestId: {type: GraphQLString},approverId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateTrainingStatus?fromDate=${args.fromDate}reason=${args.reason}partyId=${args.partyId}trainingClassTypeId=${args.trainingClassTypeId}workEffortId=${args.workEffortId}approvalStatus=${args.approvalStatus}trainingRequestId=${args.trainingRequestId}approverId=${args.approverId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateTrainingStatus};


const updateTrainingTypes = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTrainingTypes method',
  args:{description: {type: GraphQLString},trainingClassTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateTrainingTypes?description=${args.description}trainingClassTypeId=${args.trainingClassTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}`, null, req);
  }
};
export {updateTrainingTypes};


const updateUnemploymentClaim = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateUnemploymentClaim method',
  args:{unemploymentClaimId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},statusId: {type: GraphQLString},description: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},unemploymentClaimDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateUnemploymentClaim?unemploymentClaimId=${args.unemploymentClaimId}roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}statusId=${args.statusId}description=${args.description}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}unemploymentClaimDate=${args.unemploymentClaimDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateUnemploymentClaim};


const updateValidResponsibility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateValidResponsibility method',
  args:{fromDate: {type: GraphQLString},responsibilityTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanress/updateValidResponsibility?fromDate=${args.fromDate}responsibilityTypeId=${args.responsibilityTypeId}emplPositionTypeId=${args.emplPositionTypeId}comments=${args.comments}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateValidResponsibility};
