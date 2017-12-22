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

const AgreementContentTypeResponseType = new GraphQLObjectType({
  name: 'AgreementContentTypeResponseType',
  description: 'response type for AgreementContentType',

  fields: () => ({
    agreementContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AgreementContentTypeResponseType};
    