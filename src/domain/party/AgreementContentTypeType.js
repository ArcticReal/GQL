
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementContentType} from '../party/AgreementContentType.js';


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
    agreementContentType: {
      type: new GraphQLList(AgreementContentTypeType),
      args : {agreementContentTypeId: {type: GraphQLString}},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbizArray.load(`agreementContentTypes/find?agreementContentTypeId=${agreementContentType.agreementContentTypeId}`)
    },
    agreementContent: {
      type: new GraphQLList(AgreementContentType),
      args : {agreementContentTypeId: {type: GraphQLString}},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbizArray.load(`agreementContents/find?agreementContentTypeId=${agreementContentType.agreementContentTypeId}`)
    }
  })
});

export {AgreementContentTypeType};
    