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

const AccommodationClassInputType = new GraphQLInputObjectType({
  name: 'AccommodationClassInputType',
  description: 'input type for AccommodationClass',

  fields: () => ({
    accommodationClassId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentClassId: {type: GraphQLString}
  })
});

export {AccommodationClassInputType};
    