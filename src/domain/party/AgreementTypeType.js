
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementType} from '../party/AgreementType.js';
import {AgreementTypeAttrType} from '../party/AgreementTypeAttrType.js';


const AgreementTypeType = new GraphQLObjectType({
  name: 'AgreementTypeType',
  description: 'Type for AgreementType in party',

  fields: () => ({
    parentType: {
      type: AgreementTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbiz.load(`agreementTypes/find?agreementTypeId=${agreementType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    agreement: {
      type: new GraphQLList(AgreementType),
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?agreementTypeId=${agreementType.agreementTypeId}`)
    },
    agreementType: {
      type: new GraphQLList(AgreementTypeType),
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`agreementTypes/find?agreementTypeId=${agreementType.agreementTypeId}`)
    },
    agreementTypeAttr: {
      type: new GraphQLList(AgreementTypeAttrType),
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`agreementTypeAttrs/find?agreementTypeId=${agreementType.agreementTypeId}`)
    }
  })
});

export {AgreementTypeType};
    