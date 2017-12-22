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

const GoodIdentificationResponseType = new GraphQLObjectType({
  name: 'GoodIdentificationResponseType',
  description: 'response type for GoodIdentification',

  fields: () => ({
    goodIdentificationTypeId: {type: GraphQLString},
    idValue: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {GoodIdentificationResponseType};
    