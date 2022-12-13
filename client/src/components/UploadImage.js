let { user,uploadImage
} = useAppContext()



function handleimage(event){
    uploadImage(event)
  }


<div class="form-row">
<input type="file" id="image" accept="image/*" onChange={handleimage} />
</div>