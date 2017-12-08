
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

import {AgreementType} from '../party/Agreement.js';
import {AgreementTypeAttrType} from '../party/AgreementTypeAttr.js';


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
    agreements: {
      type: new GraphQLList(AgreementType),
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?agreementTypeId=${agreementType.agreementTypeId}`)
    },
    agreementTypes: {
      type: new GraphQLList(AgreementTypeType),
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`agreementTypes/find?agreementTypeId=${agreementType.agreementTypeId}`)
    },
    agreementTypeAttrs: {
      type: new GraphQLList(AgreementTypeAttrType),
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`agreementTypeAttrs/find?agreementTypeId=${agreementType.agreementTypeId}`)
    }
  })
});

export {AgreementTypeType};
    




const AgreementTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementTypeInputType',
  description: 'input type for AgreementType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AgreementTypeInputType};
    