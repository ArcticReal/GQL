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

const RateTypeResponseType = new GraphQLObjectType({
  name: 'RateTypeResponseType',
  description: 'response type for RateType',

  fields: () => ({
    description: {type: GraphQLString},
    rateTypeId: {type: GraphQLString}
  })
});

export {RateTypeResponseType};
    