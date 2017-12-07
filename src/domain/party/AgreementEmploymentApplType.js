
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementItemType} from '../party/AgreementItemType.js';
import {EmploymentType} from '../humanres/EmploymentType.js';


const AgreementEmploymentApplType = new GraphQLObjectType({
  name: 'AgreementEmploymentApplType',
  description: 'Type for AgreementEmploymentAppl in party',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    agreementDate: {type: GraphQLString},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementEmploymentAppl, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${agreementEmploymentAppl.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeFrom: {
      type: EmploymentType,
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (agreementEmploymentAppl, args, {loaders}) => loaders.ofbiz.load(`employments/find?roleTypeIdFrom=${agreementEmploymentAppl.roleTypeIdFrom}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {AgreementEmploymentApplType};
    