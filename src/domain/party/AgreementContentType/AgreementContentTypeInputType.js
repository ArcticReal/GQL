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

const AgreementContentTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementContentTypeInputType',
  description: 'input type for AgreementContentType',

  fields: () => ({
    agreementContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AgreementContentTypeInputType};
    