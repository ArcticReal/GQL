
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
      resolve: (agreementType, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementTypes/find?agreementTypeId=${agreementType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    agreements: {
      type: new GraphQLList(AgreementType),
      args : {},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`party/agreements/find?agreementTypeId=${agreementType.agreementTypeId}`)
    },
    agreementTypes: {
      type: new GraphQLList(AgreementTypeType),
      args : {},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTypes/find?agreementTypeId=${agreementType.agreementTypeId}`)
    },
    agreementTypeAttrs: {
      type: new GraphQLList(AgreementTypeAttrType),
      args : {},
      resolve: (agreementType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTypeAttrs/find?agreementTypeId=${agreementType.agreementTypeId}`)
    }
  })
});

export {AgreementTypeType};
    




const AgreementTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementTypeInputType',
  description: 'input type for AgreementType',

  fields: () => ({
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AgreementTypeInputType};
    