
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

import {PartyType} from '../party/Party.js';
import {EmploymentAppSourceTypeType} from '../humanres/EmploymentAppSourceType.js';
import {EmplPositionType} from '../humanres/EmplPosition.js';
import {JobRequisitionType} from '../humanres/JobRequisition.js';


const EmploymentAppType = new GraphQLObjectType({
  name: 'EmploymentAppType',
  description: 'Type for EmploymentApp in humanres',

  fields: () => ({
    applyingParty: {
      type: PartyType,
      args : {applyingPartyId: {type: GraphQLString}},
      resolve: (employmentApp, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${employmentApp.applyingPartyId}`)
    },
    statusId: {type: GraphQLString},
    approverParty: {
      type: PartyType,
      args : {approverPartyId: {type: GraphQLString}},
      resolve: (employmentApp, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${employmentApp.approverPartyId}`)
    },
    employmentAppSourceType: {
      type: EmploymentAppSourceTypeType,
      args : {employmentAppSourceTypeId: {type: GraphQLString}},
      resolve: (employmentApp, args, {loaders}) => loaders.ofbiz.load(`employmentAppSourceTypes/find?employmentAppSourceTypeId=${employmentApp.employmentAppSourceTypeId}`)
    },
    emplPosition: {
      type: EmplPositionType,
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (employmentApp, args, {loaders}) => loaders.ofbiz.load(`emplPositions/find?emplPositionId=${employmentApp.emplPositionId}`)
    },
    applicationId: {type: GraphQLString},
    referredByParty: {
      type: PartyType,
      args : {referredByPartyId: {type: GraphQLString}},
      resolve: (employmentApp, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${employmentApp.referredByPartyId}`)
    },
    jobRequisition: {
      type: JobRequisitionType,
      args : {jobRequisitionId: {type: GraphQLString}},
      resolve: (employmentApp, args, {loaders}) => loaders.ofbiz.load(`jobRequisitions/find?jobRequisitionId=${employmentApp.jobRequisitionId}`)
    },
    applicationDate: {type: GraphQLString}
  })
});

export {EmploymentAppType};
    




const EmploymentAppInputType = new GraphQLInputObjectType({
  name: 'EmploymentAppInputType',
  description: 'input type for EmploymentApp in humanres',

  fields: () => ({
    applyingPartyId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    approverPartyId: {type: GraphQLString},
    employmentAppSourceTypeId: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    applicationId: {type: GraphQLString},
    referredByPartyId: {type: GraphQLString},
    jobRequisitionId: {type: GraphQLString},
    applicationDate: {type: GraphQLString}
  })
});

export {EmploymentAppInputType};
    