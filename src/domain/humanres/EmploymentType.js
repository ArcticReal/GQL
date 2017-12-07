
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {AgreementType} from '../party/AgreementType.js';
import {TerminationTypeType} from '../humanres/TerminationTypeType.js';
import {TerminationReasonType} from '../humanres/TerminationReasonType.js';
import {AgreementEmploymentApplType} from '../party/AgreementEmploymentApplType.js';
import {PayHistoryType} from '../humanres/PayHistoryType.js';


const EmploymentType = new GraphQLObjectType({
  name: 'EmploymentType',
  description: 'Type for Employment in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyFrom: {
      type: PartyRoleType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${employment.partyIdFrom}`)
    },
    terminationReason: {
      type: TerminationReasonType,
      args : {terminationReasonId: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbiz.load(`terminationReasons/find?terminationReasonId=${employment.terminationReasonId}`)
    },
    terminationType: {
      type: TerminationTypeType,
      args : {terminationTypeId: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbiz.load(`terminationTypes/find?terminationTypeId=${employment.terminationTypeId}`)
    },
    partyTo: {
      type: new GraphQLList(AgreementType),
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?agreementId=${employment.partyIdTo}`)
    },
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    agreementEmploymentAppl: {
      type: new GraphQLList(AgreementEmploymentApplType),
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbizArray.load(`agreementEmploymentAppls/find?roleTypeIdFrom=${employment.roleTypeIdFrom}`)
    },
    payHistory: {
      type: new GraphQLList(PayHistoryType),
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbizArray.load(`payHistorys/find?roleTypeIdFrom=${employment.roleTypeIdFrom}`)
    }
  })
});

export {EmploymentType};
    