
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

import {AgreementItemType} from '../../party/AgreementItem/AgreementItemType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const AgreementFacilityApplType = new GraphQLObjectType({
  name: 'AgreementFacilityApplType',
  description: 'Type for AgreementFacilityAppl in party',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (agreementFacilityAppl, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${agreementFacilityAppl.facilityId}`)
    },
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementFacilityAppl, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${agreementFacilityAppl.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementFacilityApplType};
    