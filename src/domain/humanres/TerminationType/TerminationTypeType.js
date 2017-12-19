
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



const TerminationTypeType = new GraphQLObjectType({
  name: 'TerminationTypeType',
  description: 'Type for TerminationType in humanres',

  fields: () => ({
    parentType: {
      type: TerminationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (terminationType, args, {loaders}) => loaders.ofbiz.load(`humanres/terminationTypes/find?terminationTypeId=${terminationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    terminationTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    terminationTypes: {
      type: new GraphQLList(TerminationTypeType),
      args : {},
      resolve: (terminationType, args, {loaders}) => loaders.ofbizArray.load(`humanres/terminationTypes/find?terminationTypeId=${terminationType.terminationTypeId}`)
    }
  })
});

export {TerminationTypeType};
    