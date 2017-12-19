
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

import {AgreementContentType} from '../../party/AgreementContent/AgreementContentType.js';


const AgreementContentTypeType = new GraphQLObjectType({
  name: 'AgreementContentTypeType',
  description: 'Type for AgreementContentType in party',

  fields: () => ({
    parentType: {
      type: AgreementContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementContentTypes/find?agreementContentTypeId=${agreementContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    agreementContentTypeId: {type: GraphQLString},
    agreementContentTypes: {
      type: new GraphQLList(AgreementContentTypeType),
      args : {},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementContentTypes/find?agreementContentTypeId=${agreementContentType.agreementContentTypeId}`)
    },
    agreementContents: {
      type: new GraphQLList(AgreementContentType),
      args : {},
      resolve: (agreementContentType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementContents/find?agreementContentTypeId=${agreementContentType.agreementContentTypeId}`)
    }
  })
});

export {AgreementContentTypeType};
    