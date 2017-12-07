
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const TerminationReasonType = new GraphQLObjectType({
  name: 'TerminationReasonType',
  description: 'Type for TerminationReason in humanres',

  fields: () => ({
    terminationReasonId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TerminationReasonType};
    