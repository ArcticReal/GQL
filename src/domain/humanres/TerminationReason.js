
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



const TerminationReasonType = new GraphQLObjectType({
  name: 'TerminationReasonType',
  description: 'Type for TerminationReason in humanres',

  fields: () => ({
    terminationReasonId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TerminationReasonType};
    




const TerminationReasonInputType = new GraphQLInputObjectType({
  name: 'TerminationReasonInputType',
  description: 'input type for TerminationReason',

  fields: () => ({
    description: {type: GraphQLString},
    terminationReasonId: {type: GraphQLString}
  })
});

export {TerminationReasonInputType};
    