
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



const PerfRatingTypeType = new GraphQLObjectType({
  name: 'PerfRatingTypeType',
  description: 'Type for PerfRatingType in humanres',

  fields: () => ({
    perfRatingTypeId: {type: GraphQLString},
    parentType: {
      type: PerfRatingTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (perfRatingType, args, {loaders}) => loaders.ofbiz.load(`humanres/perfRatingTypes/find?perfRatingTypeId=${perfRatingType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    perfRatingTypes: {
      type: new GraphQLList(PerfRatingTypeType),
      args : {},
      resolve: (perfRatingType, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfRatingTypes/find?perfRatingTypeId=${perfRatingType.perfRatingTypeId}`)
    }
  })
});

export {PerfRatingTypeType};
    




const PerfRatingTypeInputType = new GraphQLInputObjectType({
  name: 'PerfRatingTypeInputType',
  description: 'input type for PerfRatingType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString}
  })
});

export {PerfRatingTypeInputType};
    