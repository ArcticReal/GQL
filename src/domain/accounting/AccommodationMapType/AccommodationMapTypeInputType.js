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

const AccommodationMapTypeInputType = new GraphQLInputObjectType({
  name: 'AccommodationMapTypeInputType',
  description: 'input type for AccommodationMapType',

  fields: () => ({
    accommodationMapTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AccommodationMapTypeInputType};
    