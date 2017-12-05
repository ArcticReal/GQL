
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const VarianceReason = new GraphQLObjectType({
  name: 'VarianceReasonType',
  description: 'Type for VarianceReason in product',

  fields: () => ({
    varianceReasonId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {VarianceReason};
    