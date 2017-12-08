
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

import {AgreementContentType} from '../party/AgreementContent.js';


const AgreementContentTypeType = new GraphQLObjectType({
  name: 'AgreementContentTypeType',
  description: 'Type for AgreementContentType in party',

  fields: () => ({
    parentType: {
      type: AgreementContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbiz.load(`agreementContentTypes/find?agreementContentTypeId=${agreementContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    agreementContentTypeId: {type: GraphQLString},
    agreementContentTypes: {
      type: new GraphQLList(AgreementContentTypeType),
      args : {agreementContentTypeId: {type: GraphQLString}},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbizArray.load(`agreementContentTypes/find?agreementContentTypeId=${agreementContentType.agreementContentTypeId}`)
    },
    agreementContents: {
      type: new GraphQLList(AgreementContentType),
      args : {agreementContentTypeId: {type: GraphQLString}},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbizArray.load(`agreementContents/find?agreementContentTypeId=${agreementContentType.agreementContentTypeId}`)
    }
  })
});

export {AgreementContentTypeType};
    




const AgreementContentTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementContentTypeInputType',
  description: 'input type for AgreementContentType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    agreementContentTypeId: {type: GraphQLString}
  })
});

export {AgreementContentTypeInputType};
    