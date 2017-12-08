
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

import {AgreementItemType} from '../party/AgreementItem.js';
import {FacilityType} from '../product/Facility.js';


const AgreementFacilityApplType = new GraphQLObjectType({
  name: 'AgreementFacilityApplType',
  description: 'Type for AgreementFacilityAppl in party',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (agreementFacilityAppl, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${agreementFacilityAppl.facilityId}`)
    },
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementFacilityAppl, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${agreementFacilityAppl.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementFacilityApplType};
    




const AgreementFacilityApplInputType = new GraphQLInputObjectType({
  name: 'AgreementFacilityApplInputType',
  description: 'input type for AgreementFacilityAppl in party',

  fields: () => ({
    facilityId: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementFacilityApplInputType};
    