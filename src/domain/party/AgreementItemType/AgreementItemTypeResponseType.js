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

const AgreementItemTypeResponseType = new GraphQLObjectType({
  name: 'AgreementItemTypeResponseType',
  description: 'response type for AgreementItemType',

  fields: () => ({
    agreementItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AgreementItemTypeResponseType};
    