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

const RateTypeInputType = new GraphQLInputObjectType({
  name: 'RateTypeInputType',
  description: 'input type for RateType',

  fields: () => ({
    description: {type: GraphQLString},
    rateTypeId: {type: GraphQLString}
  })
});

export {RateTypeInputType};
    